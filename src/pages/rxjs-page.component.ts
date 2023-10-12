import {Component, OnInit} from "@angular/core";
import {of} from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs-page.component.html'
})

export class RxJsPageComponent implements  OnInit {

  items: Array<string> = []
  observable = of('item 1')
  constructor() { }

  ngOnInit() {
    this.observable.subscribe( i => this.items.push(i))
  }
}
