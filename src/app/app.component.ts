import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  description1 = 'Description of item 1';
  isVipClient = true

  value: {
    description: string,
    name: string,
    id: number,
  } = {
      description: '',
      name: '',
      id: 0
    }

  values = [
    {
      description: 'Description item 1',
      name: 'Item 1',
      id: 1
    },
    {
      description: 'Description item 2',
      name: 'Item 2',
      id: 2
    }
  ]

  dateToPipe = Date.now();
  currencyValue = 10.50;

  AddItem() {
    this.values.push({
      description: this.value.description,
      name: this.value.name,
      id: 3
    })
  }

  ChangeVipStatus() {
    this.isVipClient = !this.isVipClient
  }
}
