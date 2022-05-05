import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

nombre: string = 'Claudia';
genero: string = 'femenino';

invitacionMapa = {
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
}


}
