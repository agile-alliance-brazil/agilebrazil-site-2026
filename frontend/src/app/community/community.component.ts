import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  private http = inject(HttpClient);

  version: number = 1;
  isLoading: boolean = false;
  hasError: boolean = false;

  comunidadesBase: any[] = [];

  autoplayDelay = 3000; // ms
  showPopup = false;
  comunidadeSelecionada: any = null;
  comunidades: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.carregarComunidades();
  }

  carregarComunidades(): void {
    this.isLoading = true;
    this.hasError = false;
    
    // Substitua o ID da planilha pela URL real no formato do Google Visualization API
    const url = 'https://docs.google.com/spreadsheets/d/SEU_ID_DA_PLANILHA/gviz/tq?tqx=out:json';

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (responseText) => {
        const jsonString = responseText.slice(responseText.indexOf('setResponse(') + 'setResponse('.length, responseText.lastIndexOf(')'));
        const responseJSON = JSON.parse(jsonString);

        this.processarDadosPlanilha(responseJSON.table.rows);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar comunidades', err);
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  private processarDadosPlanilha(rows: any[]): void {
    this.comunidadesBase = [];

    // O CSV gerado possui as seguintes colunas (na ordem):
    // 0: name, 1: description, 2: imageUrl, 3: tags, 4: instagram, 5: youtube, 
    // 6: linkedin, 7: link, 8: whatsapp, 9: meetup, 10: nivel, 11: pontuacao, 12: linkCupom
    
    rows.forEach(rowNode => {
      const row = rowNode.c.map((prop: any) => prop ? prop.v : null);
      
      const comunidade: any = {
        name: row[0],
        description: row[1],
        imageUrl: row[2],
        tags: row[3] ? row[3].split(';') : [],
        instagram: row[4],
        youtube: row[5],
        linkedin: row[6],
        link: row[7],
        whatsapp: row[8],
        meetup: row[9],
        nivel: row[10] ? parseInt(row[10], 10) : 1,
        pontuacao: row[11] ? parseInt(row[11], 10) : 2,
        linkCupom: row[12]
      };
      
      // Remover propriedades nulas/vazias para manter compatibilidade
      Object.keys(comunidade).forEach(key => !comunidade[key] && delete comunidade[key]);

      this.comunidadesBase.push(comunidade);
    });

    this.comunidades = [...this.comunidadesBase].sort((a, b) => b.pontuacao - a.pontuacao);
    console.log('Comunidades carregadas:', this.comunidades);
  }

  changeVersion(params: number) {
    this.version = params;
  }

  get comunidadesEngajadas() {
    return this.comunidades.filter(comunidade => comunidade.nivel === 2);
  }

  get comunidadesParceiras() {
    return this.comunidades.filter(comunidade => comunidade.nivel === 1);
  }

  get comunidadesDestaque() {
    return this.comunidades.filter(comunidade => comunidade.nivel === 3);
  }

  openPopup(comunidade: any): void {
    this.comunidadeSelecionada = comunidade;
    setTimeout(() => {
      this.showPopup = true;
    }, 20);
  }

  closePopup(): void {
    this.showPopup = false;
    sessionStorage.setItem('ab2026_popup_closed', 'true');
  }

}
