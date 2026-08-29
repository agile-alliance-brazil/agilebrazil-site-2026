import { Component, OnDestroy, OnInit, Renderer2, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var RDStationForms: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  patrocinadores = [
    {
      name: 'Gino Terentim',
      imageUrl: '/2026/assets/images/ginoterentim.png',
      nivel: 'Gold',
      link: 'https://ginoterentim.com/'
    }
  ];


  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngAfterViewInit(): void {
    this.carregarScriptRD();
  }

  carregarScriptRD(): void {
    // Evita carregar o script mais de uma vez se o usuário navegar entre telas
    if (this.document.getElementById('rdstation-script')) {
      this.inicializarFormulario();
      return;
    }

    // Cria a tag <script> dinamicamente
    const script = this.renderer.createElement('script');
    script.id = 'rdstation-script';
    script.type = 'text/javascript';
    script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';

    // Assim que o script carregar, inicializa o form
    script.onload = () => {
      this.inicializarFormulario();
    };

    // Adiciona o script ao final do <body>
    this.renderer.appendChild(this.document.body, script);
  }

  inicializarFormulario(): void {
    // Verifica se a classe do RD Station está disponível no escopo global
    setTimeout(() => {
      if (typeof RDStationForms !== 'undefined') {
        new RDStationForms('leads-site-8be23e7af83c036ddfdf', 'null').createForm();
      }
    }, 100);
  }

}
