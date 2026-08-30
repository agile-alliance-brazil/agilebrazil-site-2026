import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'alter-program',
  templateUrl: './alter-program.component.html',
  styleUrls: ['./alter-program.component.scss']
})
export class AlterProgramComponent {
  private http = inject(HttpClient);

  atualizarProgramacao () {
    const url = 'https://insc.faculdadefacit.edu.br/chamada_agile_brazil_2024.php';

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (responseText) => {
        console.log(responseText);
      },
      error: (err) => {
        console.error('Erro ao buscar programação', err);
      }
    });
  }

  atualizarComunidade () {
    const url = 'https://insc.faculdadefacit.edu.br/chamada_agile_brazil_comunidade.php';

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (responseText) => {
        console.log(responseText);
      },
      error: (err) => {
        console.error('Erro ao buscar programação', err);
      }
    });
  }
}
