import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface Speaker {
  autor: string;
  miniBiografia: string;
  foto: string;
  linkedin: string | false;
  comunidade?: string;
  imgComunidade?: string;
  tags?: string[];
}

export interface ProgramSession {
  id: string;
  hourId: string;
  time: string;
  title: string;
  type: string;
  track: string;
  cssClass: string;
  location: string;
  description: string;
  hasDescription: boolean;
  capacity: number | boolean;
  speakers: Speaker[];
  fullWidth?: boolean;
  endTime?: string;
}

export interface ScheduleCell {
  session: ProgramSession;
  rowspan: number;
}

// Linha da grade: ou uma sessão ocupando todas as colunas (keynote, coffee, almoço...)
// ou uma célula por sala (undefined = vazia, null = coberta pelo rowspan de uma sessão anterior)
export interface ScheduleRow {
  time: string;
  fullWidth?: ProgramSession;
  cells: (ScheduleCell | undefined | null)[];
}

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent{
  private http = inject(HttpClient);

  public currentDay: number = 12;
  public isLoading: boolean = false;
  public hasError: boolean = false;

  public dataProgram: Record<number, Record<string, ProgramSession>> = { 12: {}, 13: {} };

  // Sufixo do ID (identificacao-HHMM-N) de cada coluna da grade: 2 palcos + sala de workshop
  private readonly columnSuffixes = ['1', '2', '3'];
  public rooms: Record<number, string[]> = { 12: [], 13: [] };
  public schedule: Record<number, ScheduleRow[]> = { 12: [], 13: [] };

  public isModalOpen: boolean = false;
  public modalSession: ProgramSession | null = null;
  public modalSpeaker: Speaker | null = null;
  public modalViewType: 1 | 2 | 3 = 1; // 1 = Info Sessão, 2 = Speaker 1, 3 = Speaker 2

  public comunityProgram: Record<number, Record<string, ProgramSession>> = { 12: {}, 13: {} };

  ngOnInit(): void {
    this.iniciarProgramacao();
  }

  iniciarProgramacao(atualizar: boolean = false): void {
    this.isLoading = true;
    this.hasError = false;
    const url = 'https://docs.google.com/spreadsheets/d/1n8AK2Pp4CbYo1A6V4431wGjTcXYjw4Dqi57khjqaqvQ/gviz/tq?tqx=out:json';
    // const url = 'https://insc.faculdadefacit.edu.br/agile_brazil_2026.php';

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (responseText) => {
        const jsonString = responseText.slice(responseText.indexOf('setResponse(') + 'setResponse('.length, responseText.lastIndexOf(')'));
        const responseJSON = JSON.parse(jsonString);

        this.processarDadosPlanilha(responseJSON.table.rows);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar programação', err);
        this.hasError = true;
        this.isLoading = false;
      }
    });

    this.iniciarProgramacaoComunidade();
  }

  iniciarProgramacaoComunidade(): void {
    // TODO: substituir pela URL do proxy da planilha de programação da Arena Comunidades
    // const url = 'https://docs.google.com/spreadsheets/d/1DwFxCadmrpsm8sy_sHcG_zikrDyOzVTS0QotCGriZxY/gviz/tq?tqx=out:json';
    const url = 'https://insc.faculdadefacit.edu.br/agile_brazil_2026_comunidade_programacao.php';

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (responseText) => {
        const jsonString = responseText.slice(responseText.indexOf('setResponse(') + 'setResponse('.length, responseText.lastIndexOf(')'));
        const responseJSON = JSON.parse(jsonString);

        this.processarDadosPlanilhaComunidade(responseJSON.table.rows);
      },
      error: (err) => {
        console.error('Erro ao buscar programação da comunidade', err);
      }
    });
  }

  // Colunas: Dia, Horário, ID, Local, Título, Descrição, Capacidade,
  // depois 7 colunas por palestrante (Nome, Foto, Mini Biografia, LinkedIn, Comunidade, Imagem Comunidade, Tags)
  private processarDadosPlanilhaComunidade(rows: any[]): void {
    this.comunityProgram = { 12: {}, 13: {} };

    rows.forEach(rowNode => {
      const row = rowNode.c.map((prop: any) => prop ? prop.v : null);
      const day = row[0];
      const time = row[1];
      const id = row[2];
      const location = row[3];
      const title = row[4] ?? 'Em definição';
      const description = row[5];
      const capacity = row[6];

      if (!id) return;

      if (!this.comunityProgram[day]) {
        this.comunityProgram[day] = {};
      }

      const speakers: Speaker[] = [];

      [7, 14].forEach(col => {
        if (!row[col] || row[col] === '-') return;

        speakers.push({
          autor: row[col],
          foto: this.formatarUrlImagem(row[col + 1]),
          miniBiografia: row[col + 2] ?? '',
          linkedin: row[col + 3] ? (row[col + 3].includes('http') ? row[col + 3] : `https://${row[col + 3]}`) : false,
          comunidade: row[col + 4],
          imgComunidade: this.formatarUrlImagem(row[col + 5]),
          tags: row[col + 6] ? String(row[col + 6]).split(',').map((tag: string) => tag.trim()).filter(Boolean) : []
        });
      });

      this.comunityProgram[day][id] = {
        id,
        hourId: id,
        time,
        title,
        type: 'Comunidade',
        track: 'Comunidade',
        location,
        description,
        hasDescription: !!description,
        capacity: capacity ?? false,
        speakers,
        cssClass: 'default'
      };
    });

    console.log('Programação da comunidade carregada:', this.comunityProgram);
  }

  private processarDadosPlanilha(rows: any[]): void {
    this.dataProgram = { 12: {}, 13: {} };

    rows.forEach(rowNode => {
      const row = rowNode.c.map((prop: any) => prop ? prop.v : null);
      const day = row[0];
      const id = row[2];
      const time = row[1];
      const title = row[4] ?? 'Em definição';
      const track = this.getTrack(row[5]);
      const cssClass = this.getClassCss(row[5]);
      const location = row[3];
      const type = row[6] ?? row[4] ?? 'Geral';
      const description = row[7];
      const capacity = row[16];

      if (!id) return;

      if (!this.dataProgram[day]) {
        this.dataProgram[day] = {};
      }

      const speakers: Speaker[] = [];

      if (row[8]) {
        speakers.push({
          autor: row[8],
          foto: this.formatarUrlImagem(row[9]),
          miniBiografia: row[10],
          linkedin: row[11] ? (row[11].includes('http') ? row[11] : `https://${row[11]}`) : false
        });
      }

      if (row[12] && row[12] !== '-') {
        speakers.push({
          autor: row[12],
          foto: this.formatarUrlImagem(row[13]),
          miniBiografia: row[14],
          linkedin: row[15] ? (row[15].includes('http') ? row[15] : `https://${row[15]}`) : false
        });
      }

      this.dataProgram[day][id] = {
        id,
        hourId: id?.split('-').slice(0, 2).join('-'),
        time,
        title,
        type,
        track,
        location,
        description,
        hasDescription: !!row[10] || !!description,
        capacity: capacity ?? false,
        speakers,
        cssClass,
        fullWidth: id.split('-').length === 2,
        endTime: this.formatarMinutos(this.paraMinutos(time) + this.getDuracao(type))
      };
    });

    Object.keys(this.dataProgram).forEach(day => this.montarGrade(Number(day)));

    console.log('Programação carregada:', this.dataProgram);
  }

  // Monta as linhas da grade a partir dos horários de início das sessões dos palcos.
  // Sessões mais longas (workshops) ocupam todas as linhas que começam antes do seu término.
  private montarGrade(day: number): void {
    const sessions = Object.values(this.dataProgram[day]);
    const columnOf = (session: ProgramSession) => this.columnSuffixes.indexOf(session.id.split('-')[2]);
    const isWorkshopColumn = (column: number) => column === this.columnSuffixes.length - 1;

    const rowTimes = Array.from(new Set(
      sessions
        .filter(session => session.fullWidth || (columnOf(session) >= 0 && !isWorkshopColumn(columnOf(session))))
        .map(session => this.paraMinutos(session.time))
    )).sort((a, b) => a - b);

    const rows: ScheduleRow[] = rowTimes.map(minutes => ({
      time: this.formatarMinutos(minutes),
      cells: this.columnSuffixes.map(() => undefined)
    }));

    sessions.filter(session => session.fullWidth).forEach(session => {
      rows[rowTimes.indexOf(this.paraMinutos(session.time))].fullWidth = session;
    });

    sessions.filter(session => !session.fullWidth && columnOf(session) >= 0).forEach(session => {
      const column = columnOf(session);
      const start = this.paraMinutos(session.time);
      const end = this.paraMinutos(session.endTime);
      const first = rowTimes.findIndex(minutes => minutes >= start);
      if (first < 0 || rows[first].fullWidth) return;

      // Ocupa as linhas seguintes até o término da sessão, sem atravessar keynotes/intervalos
      let rowspan = 1;
      while (first + rowspan < rows.length && rowTimes[first + rowspan] < end && !rows[first + rowspan].fullWidth) {
        rows[first + rowspan].cells[column] = null;
        rowspan++;
      }
      rows[first].cells[column] = { session, rowspan };
    });

    this.schedule[day] = rows;
    this.rooms[day] = this.columnSuffixes.map((_, column) =>
      sessions.find(session => !session.fullWidth && columnOf(session) === column)?.location ?? '');
  }

  // Sessões que começam em cada linha, na ordem das salas (usado na versão mobile)
  public sessoesDaLinha(row: ScheduleRow): ProgramSession[] {
    return row.fullWidth ? [row.fullWidth] : row.cells.filter(cell => !!cell).map(cell => cell.session);
  }

  private paraMinutos(time: string): number {
    const [hours, minutes] = String(time ?? '0:0').split(':').map(Number);
    return hours * 60 + (minutes || 0);
  }

  private formatarMinutos(total: number): string {
    return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
  }

  // Duração em minutos a partir do tipo (ex.: 'Palestra 30', 'Workshop 70')
  private getDuracao(type: string): number {
    const duration = Number(String(type ?? '').match(/\d+/)?.[0]);
    return duration || 30;
  }

  public setDay(day: number): void {
    this.currentDay = day;
  }

  public openPopup(session: ProgramSession, viewType: 1 | 2 | 3): void {
    //return;
    this.modalSession = session;
    this.modalViewType = viewType;

    if (viewType === 2 && session.speakers.length > 0) {
      this.modalSpeaker = session.speakers[0];
    } else if (viewType === 3 && session.speakers.length > 1) {
      this.modalSpeaker = session.speakers[1];
    } else {
      this.modalSpeaker = null;
    }

    this.isModalOpen = true;
  }

  public closePopup(): void {
    this.isModalOpen = false;
    this.modalSession = null;
    this.modalSpeaker = null;
  }

  private formatarUrlImagem(url: string | null): string {
    if (!url) return '';
    return url.includes('drive.google.com') 
      ? url.replace('drive.google.com/open?id=', 'drive.google.com/thumbnail?id=')
           .replace('drive.google.com/file/d/', 'drive.google.com/thumbnail?id=')
           .replace('/view?usp=sharing', '')
      : url;
  }

  private getTrack(track: string): string {
    switch (track) {
      case 'LEGM': return 'Liderança, Estratégia e Gestão da Mudança';
      case 'FA': return 'Future AI/Agility';
      case 'RA': return 'Raizes da Agilidade';
      case 'PFC': return 'Produto e Foco no Cliente';
      case 'Convidado': return 'Convidado';
      case 'Patrocinador': return 'Painel Executivo';
      default: return null;
    }
  }

  private getClassCss(track: string): string {
    switch (track) {
      case 'LEGM': return 'lideranca';
      case 'FA': return 'futuro';
      case 'RA': return 'raizes';
      case 'PFC': return 'cliente';
      case 'Painel Executivo':
      case 'Patrocinador': return 'executivo';
      case 'Arena Comunidades': return 'default';
      default: return 'default';
    }
  }
}