import { Component } from "@angular/core";
import { LocalStorageService } from "src/services/local-storage.service";

@Component({
    selector: 'app-login-page',
    template: `
        <h2>Login Page</h2><br/>
        <button (click)="logIn()">Add item</button><br/>
        <button (click)="logOff()">Logout</button>
    `
})
export class LoginPageComponent {
    constructor(private localStorageService: LocalStorageService) { }

    logIn() {
        this.localStorageService.logIn();
    }

    logOff() {
        this.localStorageService.logOff();
    }
}