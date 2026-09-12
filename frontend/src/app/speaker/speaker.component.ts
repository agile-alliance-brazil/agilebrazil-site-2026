import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface Speaker {
  autor: string;
  miniBiografia: string;
  foto: string;
  linkedin: string | false;
  palestras: string[];
}

export interface SpeakerCard {
  speaker: Speaker;
  tracks: { name: string, cssClass: string }[];
}

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {
  private http = inject(HttpClient);

  public isLoading: boolean = false;
  public hasError: boolean = false;

  public speakerCards: SpeakerCard[] = [];

  public isModalOpen: boolean = false;
  public modalSpeaker: Speaker | null = null;
  public modalViewType: 1 | 2 | 3 = 2;

  ngOnInit(): void {
    this.iniciarProgramacao();
  }

  iniciarProgramacao(): void {
    this.isLoading = true;
    this.hasError = false;
    const url = 'https://insc.faculdadefacit.edu.br/agile_brazil_2026.php';

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (responseText) => {
        const jsonString = responseText.slice(responseText.indexOf('setResponse(') + 'setResponse('.length, responseText.lastIndexOf(')'));
        const responseJSON = JSON.parse(jsonString);

        this.processarDadosPlanilha(responseJSON.table.rows);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar palestrantes', err);
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  private processarDadosPlanilha(rows: any[]): void {
    const speakersMap = new Map<string, SpeakerCard>();

    rows.forEach(rowNode => {
      const row = rowNode.c.map((prop: any) => prop ? prop.v : null);
      const track = this.getTrack(row[5]);
      const cssClass = this.getClassCss(row[5]);
      const title = row[4] ?? 'Em definição';

      const addSpeakerToMap = (autor: string, fotoUrl: string, miniBio: string, linkedinUrl: string) => {
        if (!autor) return;

        const foto = this.formatarUrlImagem(fotoUrl);
        const linkedin = linkedinUrl ? (linkedinUrl.includes('http') ? linkedinUrl : `https://${linkedinUrl}`) : false;

        let card = speakersMap.get(autor);
        if (!card) {
          card = {
            speaker: {
              autor,
              foto,
              miniBiografia: miniBio,
              linkedin,
              palestras: []
            },
            tracks: []
          };
          speakersMap.set(autor, card);
        }

        if (track && track !== 'Geral' && !card.tracks.find(t => t.name === track)) {
          card.tracks.push({ name: track, cssClass });
        }

        if (title && !card.speaker.palestras.includes(title)) {
          card.speaker.palestras.push(title);
        }
      };

      if (row[8]) {
        addSpeakerToMap(row[8], row[9], row[10], row[11]);
      }

      if (row[12] && row[12] !== '-') {
        addSpeakerToMap(row[12], row[13], row[14], row[15]);
      }
    });

    this.speakerCards = Array.from(speakersMap.values()).sort((a, b) => a.speaker.autor.localeCompare(b.speaker.autor));
    console.log('Palestrantes carregados:', this.speakerCards);
  }

  public openSpeakerPopup(speaker: Speaker): void {
    this.modalSpeaker = speaker;
    this.modalViewType = 2;
    this.isModalOpen = true;
  }

  public closePopup(): void {
    this.isModalOpen = false;
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
      case 'RA': return 'Raízes da Agilidade';
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