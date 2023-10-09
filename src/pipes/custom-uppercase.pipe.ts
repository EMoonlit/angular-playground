import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'appUpercase'
})
export class CustomUppercasePipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if (!value) return value;
        if (typeof value !== "string") throw new Error("invalid pipe argument")

        return value.toUpperCase();
    }

}