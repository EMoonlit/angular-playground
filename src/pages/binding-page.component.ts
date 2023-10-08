import { Component } from "@angular/core";

@Component({
    selector: 'app-binding',
    template: `
        <h2>Angular image</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png" />
    `
})

export class BindingPageComponent {
    image = ""
}