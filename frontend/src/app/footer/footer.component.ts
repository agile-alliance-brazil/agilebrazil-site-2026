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
    },
     {
      name: 'K21',
      imageUrl: '/2026/assets/images/sponsors/k21.png',
      nivel: 'Gold',
      link: 'https://br.k21.global/'
    },
    {
      name: 'Os Agilistas',
      imageUrl: '/2026/assets/images/osagilistasdti.png',
      nivel: 'Silver',
      link: 'https://osagilistas.com/'
    }
  ];

   get patrocinadoresOuro() {
    return this.patrocinadores.filter(patrocinador => patrocinador.nivel === 'Gold');
  }

   get patrocinadoresPrata() {
    return this.patrocinadores.filter(patrocinador => patrocinador.nivel === 'Silver');
  }
}
