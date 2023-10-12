import {Component} from "@angular/core";

@Component({
  selector: 'app-father',
  template: `
    <h1 style="color: green">Father component</h1><br/>
    <a [routerLink]="['chieldren-1']">Go to Father Component</a><br/>
    <a [routerLink]="['chieldren-2']">Go to Father Component</a>
    <router-outlet></router-outlet>
  `
})
export class FatherPageComponent {

}
