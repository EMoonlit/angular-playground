import { Component } from "@angular/core";

@Component({
    selector: 'app-binding',
    template: `
        <h2>Angular image</h2>
        <img [src]="image" [style]="{width: width}" />
        <div class="alert" [class]="{isSuccess:isSuccess}">
            Alert
        </div>

        <button (click)="toggle()">Toggle Background</button>
    `,
    styles: [
        `.alert {
            width: 200px;
            height: 100px;
            border: 1px solid green;
        }
        .isSuccess {
            background-color: green;
        }`
    ]
})

export class BindingPageComponent {
    width = "200px"
    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png"

    isSuccess = true

    toggle() {
        this.isSuccess = !this.isSuccess
    }
}