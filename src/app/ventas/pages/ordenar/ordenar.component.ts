import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean=true;

  heroe: Heroe[]=[
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

}
