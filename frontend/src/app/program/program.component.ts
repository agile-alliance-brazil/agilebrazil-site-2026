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

  public comunityProgram = {
    12: {
      'identificacao-comunity-1045': {
        id: 'identificacao-comunity-1045',
        hourId: 'identificacao-comunity-1045',
        time: '10:45 - 12:15',
        title: 'Projeto Eu: OKRs para uma Vida Mais Saudável',
        type: 'Comunidade',
        track: 'Comunidade',
        location: 'Arena Comunidades',
        description: `E se você tratasse sua saúde como um objetivo estratégico?
Nesta dinâmica, você vai explorar as dimensões física, psicológica e social da saúde, refletir sobre sua realidade por meio da Roda da Vida e transformar suas reflexões em OKRs pessoais de saúde. Uma experiência prática para sair da intenção e construir um plano concreto de cuidado com você.`,
        hasDescription: true,
        capacity: false,
        speakers: [
          {
            autor: 'Alle Petra',
            foto: '/2026/assets/images/alessandrapetra.jpeg',
            linkedin: 'https://www.linkedin.com/in/alessandrapetra/',
            comunidade: 'Agile Health Care',
            imgComunidade: '/2026/assets/images/agile_healthcare.png',
            miniBiografia: 'Alle Petra é Agile Coach.',

          }
        ],
        cssClass: 'default'
      },
      'identificacao-comunity-1430': {
        id: 'identificacao-comunity-1430',
        hourId: 'identificacao-comunity-1430',
        time: '14:30 - 16:30',
        title: 'Workshop Design Organizacional',
        type: 'Comunidade',
        track: 'Comunidade',
        location: 'Arena Comunidades',
        description: ``,
        hasDescription: false,
        capacity: false,
        speakers: [
          {
            autor: 'Ravi',
            linkedin: '',
            comunidade: '',
            imgComunidade: '',
            miniBiografia: '',

          }
        ],
        cssClass: 'default'
      }
    },
    13: {
      'identificacao-comunity-1045': {
        id: 'identificacao-comunity-1045',
        hourId: 'identificacao-comunity-1045',
        time: '10:45 - 12:45',
        title: 'Ideathon Hack - Agile IA Challenge',
        type: 'Comunidade',
        track: 'Comunidade',
        location: 'Arena Comunidade',
        description: `Você consegue transformar uma dor real em uma solução em apenas 2h30? ⚡
No Ideathon Hack – Agile IA Challenge, você vai entrar em um desafio prático, passar pelas etapas do game e construir uma solução para uma necessidade real, ao vivo e em equipe. Uma experiência para experimentar, criar, testar e entregar com agilidade e IA na prática!`,
        hasDescription: true,
        capacity: false,
        speakers: [
          {
            autor: 'Cris',
            foto: '/2026/assets/images/cristianecursino.jpeg',
            linkedin: 'https://www.linkedin.com/in/cristianecursino/',
            comunidade: 'WoHackers',
            imgComunidade: '/2026/assets/images/comunidade_wo_hackers.png',
            miniBiografia: '',

          }
        ],
        cssClass: 'default'
      },
      'identificacao-comunity-1430': {
        id: 'identificacao-comunity-1430',
        hourId: 'identificacao-comunity-1430',
        time: '14:30 - 15:30',
        title: 'Lean Coffee',
        type: 'Comunidade',
        track: 'Comunidade',
        location: 'Arena Comunidade',
        description: `E se a pauta mais relevante para você hoje viesse de quem está ao seu lado? ☕🚀
No Lean Coffee, você traz os temas, dúvidas e desafios que realmente importam. Juntos, vamos priorizar as conversas e aprender com diferentes perspectivas e experiências. Uma oportunidade de trocar ideias, encontrar novos caminhos e sair com insights práticos para problemas reais do seu trabalho.`,
        hasDescription: false,
        capacity: false,
        speakers: [
          {
            autor: 'Baldin',
            foto: '/2026/assets/images/fabiobaldin.jpeg',
            linkedin: 'https://www.linkedin.com/in/fabiobaldin/',
            comunidade: 'AGILE CAMPINAS',
            imgComunidade: '/2026/assets/images/comunidade_agile_campinas.png',
            miniBiografia: '',

          }
        ],
        cssClass: 'default'
      },
      'identificacao-comunity-1530': {
        id: 'identificacao-comunity-1530',
        hourId: 'identificacao-comunity-1530',
        time: '15:30 - 16:30',
        title: 'Laboratório Coletivo da Guilda no Itaú ser Relevante e Duradoura',
        type: 'Comunidade',
        track: 'Comunidade',
        location: 'Arena Comunidade',
        description: `O que faz uma comunidade ou grupo de trabalho ser relevante e duradouro? 🚀
Venha explorar essa pergunta em um laboratório coletivo e interativo. A partir da experiência da Guilda no Itaú, casos reais, provocações e trocas com o público, vamos investigar o que sustenta participação, aprendizagem, crescimento e continuidade. Saia com novas perspectivas, critérios para avaliar a saúde desses grupos e ideias práticas para aplicar na sua realidade.`,
        hasDescription: false,
        capacity: false,
        speakers: [
          {
            autor: 'Andre',
            linkedin: '',
            comunidade: '6eByte',
            imgComunidade: '/2026/assets/images/comunidade_6_byte.jpg',
            miniBiografia: '',

          }
        ],
        cssClass: 'default'
      }
    }
  };

  ngOnInit(): void {
    this.iniciarProgramacao();
  }

  iniciarProgramacao(atualizar: boolean = false): void {
    this.isLoading = true;
    this.hasError = false;
    // const url = 'https://docs.google.com/spreadsheets/d/1azq9A98HoXqYvhavLLCH-pSFTBN9ZX6-oB3SCoNJUD0/gviz/tq?tqx=out:json';
    const url = 'https://insc.faculdadefacit.edu.br/agile_brazil_2026.php';

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