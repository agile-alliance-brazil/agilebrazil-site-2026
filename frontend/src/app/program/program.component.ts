import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface Speaker {
  autor: string;
  miniBiografia: string;
  foto: string;
  linkedin: string | false;
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

  public dataProgram: Record<number, ProgramSession[]> = { 12: [], 13: [] };

  public isModalOpen: boolean = false;
  public modalSession: ProgramSession | null = null;
  public modalSpeaker: Speaker | null = null;
  public modalViewType: 1 | 2 | 3 = 1; // 1 = Info Sessão, 2 = Speaker 1, 3 = Speaker 2

  ngOnInit(): void {
    this.iniciarProgramacao();
  }

  iniciarProgramacao(atualizar: boolean = false): void {
    this.isLoading = true;
    this.hasError = false;
    const url = 'https://docs.google.com/spreadsheets/d/1tpt4sl5tiphfqvlgloND-dGrYBSRRfLbFliw4XTJTgo/gviz/tq?tqx=out:json';

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (responseText) => {
        const jsonString = responseText.slice(47, -2);
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
  }

  private processarDadosPlanilha(rows: any[]): void {
    this.dataProgram = { 12: [], 13: [] };

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

      if (!this.dataProgram[day]) {
        this.dataProgram[day] = [];
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
        cssClass
      };
    });

    console.log('Programação carregada:', this.dataProgram);
  }

  public setDay(day: number): void {
    this.currentDay = day;
  }

  public openPopup(session: ProgramSession, viewType: 1 | 2 | 3): void {
    return;
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
      default: return null;
    }
  }

  private getClassCss(track: string): string {
    switch (track) {
      case 'LEGM': return 'lideranca';
      case 'FA': return 'futuro';
      case 'RA': return 'raizes';
      case 'PFC': return 'cliente';
      case 'Painel Executivo': return 'executivo';
      case 'Arena Comunidades': return 'default';
      default: return 'default';
    }
  }
}