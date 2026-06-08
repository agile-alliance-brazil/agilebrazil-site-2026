import { Component } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent {

  ngAfterViewInit() {
    var script = document.createElement('script');
    script.src = 'https://www.even3.com.br/widget/js?e=agilebrazil2026-746128&t=submission&lang=pt';
    script.async = true;
    document.body.appendChild(script);
  }
}