import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean=true;

  constructor() { }

  ngOnInit(): void {
    
  }

  cambiarATrue(){
    this.enMayusculas = !this.enMayusculas;
   // console.log('cambio:', this.enMayusculas);
  }

}
