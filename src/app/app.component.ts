import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  description1 = 'Description of item 1'

  value: {
    description: string,
    name: string,
    id: number,
  } = {
      description: '',
      name: '',
      id: 0
    }
}
