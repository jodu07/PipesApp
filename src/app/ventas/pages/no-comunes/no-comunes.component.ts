import { Component, OnInit } from '@angular/core';

export interface Persona {
  nombre: string;
  genero: string;

}


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

//select

personas: Persona[] = [
  {
    nombre: 'Jhonnatan',
    genero: 'Masculino' 
  },
  {
    nombre: 'Claudia',
    genero: 'Femenino' 
  },
  {
    nombre: 'Angeline',
    genero: 'Femenino' 
  },
  {
    nombre: 'Rocio',
    genero: 'Femenino' 
  },
  {
    nombre: 'Eduar',
    genero: 'Masculino' 
  },
  {
    nombre: 'Falcao',
    genero: 'Masculino' 
  },
  
]

nombre: string = 'Claudia';
genero: string = 'femenino';
invitacionMapa = {
  'Masculino': 'invitarlo',
  'Femenino': 'invitarla'
}

//plural
clientes: string[] = ['Elena', 'Maria', 'Maria', 'Maria', 'Maria', 'Maria'];
clientesMapa = {
  '=0': 'no tenemos ningun cliente esperando',
  '=1': 'tenemos un cliente esperando',
  '=2': 'tenemos dos clientes esperando',
  'other': 'tenemos # clientes esperando' 
}


cambiarCliente(){

  const personaRandom = Math.floor(Math.random()*this.personas.length);

 //console.log(this.personas[personaRandom].nombre);   

 this.nombre = this.personas[personaRandom].nombre;

 this.genero = this.personas[personaRandom].genero;

 // console.log(personaRandom);
  
}

borrarCliente(){
  this.clientes.splice(0,1);
  console.log('borr', this.clientes);
}


}
