import { UpperCasePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform(valor: string, enMayusculas: boolean): string{
        console.log(enMayusculas); 
        
        if(enMayusculas === false){
            return valor.toUpperCase();
        }else{
            return valor.toLocaleLowerCase();
        }
        
    }
}