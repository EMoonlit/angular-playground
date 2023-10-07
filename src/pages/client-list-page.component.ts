import { Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list-page.component.html',
})

export class ClientListPage {
    isVipClient = false;
}