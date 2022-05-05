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

//18nselect

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

nombre: string = 'Jhonnatan';
genero: string = 'Masculino';
invitacionMapa = {
  'Masculino': 'invitarlo',
  'Femenino': 'invitarla'
}

//18nplural
clientes: string[] = ['Elena', 'Rodrigo', 'Jose', 'Pepe', 'Juli', 'Juan', 'Ernesto', 'juana', 'Maria'];
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

// keyValue pipe

persona = {
  nombre: 'Jhonnatan',
  edad: 33,
  direccion: 'calle'
}

// jsonPipe
heroes = [
{
  nombre: 'superman',
  vuela: true
},
{
  nombre: 'Batman',
  vuela: false
},
{
  nombre: 'Spiderman',
  vuela: false
}
]


}
