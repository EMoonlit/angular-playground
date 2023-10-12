import {Component, OnDestroy, OnInit} from "@angular/core";
import {BehaviorSubject, filter, interval, map, of, range, Subscription, tap} from "rxjs";

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

  observableExThree = range(1, 10)

  subject = new BehaviorSubject('Initial Value')
  lastEvent = ""
  count = 0
  constructor() {
  }

  ngOnInit() {
    // this.observableExOne.subscribe(i => this.items.push(i))
    //
    // // this.subscription = this.observableExTwo.subscribe(n => this.numbers.push(n))
    // this.subscription = this.observableExTwo
    //   .pipe(
    //     map(x => x * 3),
    //     tap(x => console.log(x)),
    //     filter(x => x % 2  === 0)
    //   )
    //   .subscribe(n => this.numbers.push(n))
    //
    // this.observableExThree.subscribe(
    //   i => this.numbers.push(i)
    // )

    this.subject
      .asObservable()
      .subscribe(
        e => this.lastEvent = e
      )
  }

  unsubscribe() :void {
    this.subscription.unsubscribe()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  emitEvent() {
    this.subject.next("next item " + this.count)
    this.count += 1
  }
}
