import { UpperCasePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform(valor: string, enMayusculas: boolean = true): string{
        console.log(enMayusculas); 

       return( enMayusculas ) ? valor.toLowerCase() : valor.toLocaleUpperCase();
       
       /* if(enMayusculas){
            return valor.toLocaleLowerCase();
        }else{
            return valor.toLocaleUpperCase();
        }
      *********
        if(enMayusculas === false){
            return valor.toUpperCase();
        }else{
            return valor.toLocaleLowerCase();
        }*/
        
    }
}