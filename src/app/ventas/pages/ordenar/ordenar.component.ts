import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Heroe } from '../../interfaces/ventas.interface';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean=true;

  ordenarPor:string = '';

  heroes: Heroe[]=[
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]
  
  cambiarATrue(){
    this.enMayusculas = !this.enMayusculas;
   // console.log('cambio:', this.enMayusculas);
  }

  cambiarOrden( valor: string ){
    this.ordenarPor = valor;
  //  console.log(valor);
  }

}
