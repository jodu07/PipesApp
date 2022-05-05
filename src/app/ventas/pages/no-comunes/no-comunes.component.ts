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
clientes: string[] = ['Maria', 'Maria', 'Maria', 'Maria', 'Maria', 'Maria'];
clientesMapa = {
  '=0': 'no tenemos ningun cliente esperando',
  '=1': 'tenemos un cliente esperando',
  '=2': 'tenemos dos clientes esperando',
  'other': 'tenemos # clientes esperando'
  
  
}


}
