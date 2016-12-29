import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 /* template: `
    <nav class="mdl-navigation">
     <a class="mdl-navigation__link" [routerLink]="['/izracun']">Kalkulator struje</a>
     <a class="mdl-navigation__link" [routerLink]="['/arhiva']">Stari računi</a>
    </nav>
     <router-outlet></router-outlet>
  `,*/
  template: `<app-izracun></app-izracun>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
