import {Component, OnDestroy, OnInit} from "@angular/core";
import {interval, of, Subscription} from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs-page.component.html'
})

export class RxJsPageComponent implements OnInit, OnDestroy {

  items: Array<string> = []
  observableExOne = of('item 1')

  numbers: Array<number> = []
  observableExTwo = interval(1000)

  subscription! : Subscription

  constructor() {
  }

  ngOnInit() {
    this.observableExOne.subscribe(i => this.items.push(i))

    this.subscription = this.observableExTwo.subscribe(n => this.numbers.push(n))
  }

  unsubscribe() :void {
    this.subscription.unsubscribe()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
