import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {
  comunidades = [
    {
      name: '6 e Byte',
      description: '<p > <strong>6 e Byte</strong> <br/> Somos profissionais da área de tecnologia. Nesse canal temos um único propósito: Falar sobre tecnologia de uma maneira leve e discontraída, trazendo dos mais variados profissionais da área.</p>',
      imageUrl: '/2026/assets/images/6-e-Byte.jpg',
      tags: ['Produto'],
      instagram: 'https://www.instagram.com/6ebyte',
      youtube: 'https://www.youtube.com/@6ebyte'
    },
    {
      name: 'DEVPIRA',
      description: '<p> <strong>DEVPIRA</strong> <br/> Somos uma comunidade feita de "pessoal do TI" para "pessoal do TI": programadores, POs, QAs, PMs, designers e apaixonados por pessoas e tecnologia. Sem fins lucrativos, disseminamos conhecimento em Piracicaba, onde “o peixe para”, mas a tecnologia avança e inspira novas pessoas.</p>',
      imageUrl: '/2026/assets/images/logo-devpira.png',
      tags: ['Agilidade', 'Produto', 'Tecnologia'],
      instagram: 'https://www.instagram.com/devpira/',
      link: 'https://www.devpira.com.br/'
    },
    {
      name: 'Agile Minas',
      description: '<p> <strong>Agile Minas</strong> <br/> Comunidade de agilistas para agilistas, que estejam interessados em compartilhar experiências e aprender com outros membros da comunidade mineira!</p>',
      imageUrl: '/2026/assets/images/agile-minas.png',
      tags: ['Agilidade'],
      linkedin: 'https://www.linkedin.com/company/agile-minas/posts/?feedView=all',
      instagram: 'https://www.instagram.com/agileminas/'
    }
  ];
}
