import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  open = false;

  toggle() { this.open = !this.open; }
  close() { this.open = false; }

  // close on escape
  @HostListener('document:keydown.escape', ['$event']) onEsc() { this.close(); }
}
