import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-client-detail',
    template: `
        <p style="color: green">TODO:// Insert a client info here</p>
        <p>Id: {{client.id}}</p>
    `
})
export class ClientDetailPageComponent implements OnInit {
    client = {
        id: "0"
    }

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.paramMap.get('id')
        if (id) {
            this.client.id = id;
        }
    }
}