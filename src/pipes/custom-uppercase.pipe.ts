import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'appUpercase'
})
export class CustomUppercasePipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if (value) {
            return value.toUpperCase();
        }

        return ""
    }

}