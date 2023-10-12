import {Component, OnInit} from "@angular/core";
import {interval, of} from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs-page.component.html'
})

export class RxJsPageComponent implements  OnInit {

  items: Array<string> = []
  observableExOne = of('item 1')

  numbers: Array<number> = []
  observableExTwo = interval(1000)


  constructor() { }

  ngOnInit() {
    this.observableExOne.subscribe( i => this.items.push(i))

    this.observableExTwo.subscribe(n => this.numbers.push(n))
  }
}
