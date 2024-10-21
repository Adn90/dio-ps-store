import { Component } from '@angular/core';
import { MenuLogoComponent } from "./menu-logo/menu-logo.component";
import { MenuLinksComponent } from "./menu-links/menu-links.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuLogoComponent, MenuLinksComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
