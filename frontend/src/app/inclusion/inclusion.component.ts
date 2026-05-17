import { Component } from '@angular/core';

@Component({
  selector: 'app-inclusion',
  templateUrl: './inclusion.component.html',
  styleUrls: ['./inclusion.component.scss']
})
export class InclusionComponent {
  show2021 = false;
  show2022 = false;
  show2023 = false;
  show2024 = false;

  toggleYear(year: number) {
    switch (year) {
      case 2021:
        this.show2021 = !this.show2021;
        break;
      case 2022:
        this.show2022 = !this.show2022;
        break;
      case 2023:
        this.show2023 = !this.show2023;
        break;
      case 2024:
        this.show2024 = !this.show2024;
        break;
    }
  }
}
