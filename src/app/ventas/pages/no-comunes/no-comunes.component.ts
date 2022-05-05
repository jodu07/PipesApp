import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

//select
nombre: string = 'Claudia';
genero: string = 'femenino';

invitacionMapa = {
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
}

//plural
clientes: string[] = [];
clientesMapa = {
  '=0': 'no tenemos ningun cliente esperando'
  
}


}
