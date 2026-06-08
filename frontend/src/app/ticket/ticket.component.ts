import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  ngAfterViewInit() {
    var script = document.createElement('script');
    script.src = 'https://www.even3.com.br/widget/js?e=agilebrazil2026-746128&t=ticket&lang=pt';
    script.async = true;
    document.body.appendChild(script);
  }
}