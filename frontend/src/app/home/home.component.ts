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

  keynotes = [
    {
      name: 'Annelise Gripp',
      function: 'Instrutora e Mentora na LACE Consultoria LTDA',
      description: 'Uma profissional que é referência em Agilidade, Transformação Digital e Liderança no Brasil. Ao longo dos seus 31 anos de carreira atuou em várias empresas com tecnologia, pessoas e produtos, em diferentes posições; de Agile Coach a Delivery Leader. Hoje trabalha como Consultora, Instrutora e Mentora na LACE Consultoria LTDA. Além disso, nossa palestrante possui um trabalho forte com as comunidades nacionais liderando Rio Agile, Agile Tour, entre outros. Possui certificações nacionais e internacionais tanto na área de agilidade, liderança e projetos. Também é reconhecida no mercado nacional pela disseminação da cultura Agile e na formação de pessoas, quanto a carreira e liderança.',
      imageUrl: '/2026/assets/images/annelise_gripp.jpg',
      instagram: 'https://www.instagram.com/annelisegripp/',
      linkedin: 'https://www.linkedin.com/in/annelisegripp/',
      facebook: 'https://www.facebook.com/annelise.gripp'
    },
    {
      name: 'Rodrigo de Toledo',
      function: 'Co-Founder e trainer K21',
      description: 'Um profissional, instrutor e coach apaixonado e experiente na área de metodologias ágeis, com mais de 15 anos de atuação com Scrum, Kanban e outros métodos ágeis. Ele é fundador, consultor e instrutor da K21 e da Nower, auxiliando organizações a alcançar agilidade, inovação e satisfação do cliente por meio de serviços de treinamento, coaching e consultoria. Rodrigo também é Certified Scrum Trainer, instrutor de Kanban credenciado, facilitador de Management 3.0 e possui doutorado em computação gráfica pelo INRIA, na França. Ele já capacitou mais de 10.000 profissionais em competências de produto, agilidade, gestão e liderança, no Brasil, nos EUA e na Europa. Liderou transformações e expansões ágeis em diversos setores, como governo, mercado financeiro e startups. Além disso, organizou e palestrou em diversos eventos ágeis nacionais e internacionais, compartilhando seu conhecimento e suas perspectivas com a comunidade.',
      imageUrl: '/2026/assets/images/rodrigo_de_toledo.png',
      instagram: 'https://www.instagram.com/rodrigo.detoledo/',
      linkedin: 'https://www.linkedin.com/in/rodrigodetoledo/',
      facebook: 'https://www.facebook.com/rodrigodetoledo'
    }
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
    }, 20);
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
