import { Component, OnDestroy, OnInit, Renderer2, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var RDStationForms: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  images: string[] = [
    '/2026/assets/images/hotel/img_1.jpg',
    '/2026/assets/images/hotel/img_2.jpg',
    '/2026/assets/images/hotel/img_3.jpg',
    '/2026/assets/images/hotel/img_4.jpg',
    '/2026/assets/images/hotel/img_5.jpg',
    '/2026/assets/images/hotel/img_6.jpg',
    '/2026/assets/images/hotel/img_7.JPG',
    '/2026/assets/images/hotel/img_8.jpg',
    '/2026/assets/images/hotel/img_9.jpg',
    '/2026/assets/images/hotel/img_10.jpg',
    '/2026/assets/images/hotel/img_11.jpg',
    '/2026/assets/images/hotel/img_12.jpg'
  ];

  current = 0;
  intervalId: any = null;
  autoplayDelay = 3000; // ms
  showPopup = false;

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

  ngOnInit(): void {
    this.startAutoplay();
    this.checkPopup();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  checkPopup(): void {
    /*const hasClosed = sessionStorage.getItem('ab2026_popup_closed');
    if (!hasClosed) {*/
    setTimeout(() => {
      this.showPopup = true;
    }, 800);
    //}
  }

  closePopup(): void {
    this.showPopup = false;
    sessionStorage.setItem('ab2026_popup_closed', 'true');
  }

  startAutoplay() {
    this.stopAutoplay();
    this.intervalId = setInterval(() => this.next(), this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  prev() {
    this.current = (this.current - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.current = (this.current + 1) % this.images.length;
  }

  goTo(index: number) {
    this.current = index % this.images.length;
  }
}
