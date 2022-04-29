import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'jhonnatan';
  nombreUpper: string = 'JHONNATAN';
  nombreCompleto: string = 'jHonNatAn dussAn';

  fecha: Date = new Date();  //fecha de hoy

}
