import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform{

    transform(termino: boolean= true): string{
        
         return( termino ) ? 'Vuela' :  'No vuela';
       
      }
}