import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor: string = ''): Heroe[] {

   // console.log('pipe:',ordenarPor);

   // ordenarPor con switch
   switch(ordenarPor){

    case 'nombre':
      return heroes = heroes.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1);
      
    case 'vuela':
      return heroes = heroes.sort((a,b) => (a.vuela > b.vuela) ? -1 : 1);

    case 'color':
      return heroes = heroes.sort((a,b) => (a.color > b.color) ? 1 : -1);

     default:
       return heroes;
   }

  }

}
   // ordenarPor con if else
  /*  if( ordenarPor === ''){
      return heroes;      
    }else if (ordenarPor === 'nombre'){
      //ordenar por nombre con .sort()
        heroes = heroes.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1);
    }else if (ordenarPor === 'vuela'){
      //ordenar por nombre con .sort()
        heroes = heroes.sort((a,b) => (a.vuela > b.vuela) ? 1 : -1);
    }else if (ordenarPor === 'color'){
      //ordenar por nombre con .sort()
        heroes = heroes.sort((a,b) => (a.color > b.color) ? 1 : -1);
    }   

    return heroes;

  }*/

