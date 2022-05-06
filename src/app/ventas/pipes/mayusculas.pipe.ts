import { UpperCasePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(valor: string): string{

     //   valor = valor | uppercase;
        return 'HOLA MUNDO!';
    }
}