import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    constructor() { }

    logIn() {
        localStorage.setItem('isAdmin', 'true')
    }

    logOff() {
        localStorage.removeItem('isAdmin')
    }

}