import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[];


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label:'Pipes de Angular',
          icon:'pi pi-desktop',
          items:[
              {
                  label:'Textos y fechas',
                  icon:'pi pi-align-left',
                  routerLink: '/'                  
              },
              {
                  label:'Números',
                  icon:'pi pi-dollar',
                  routerLink: 'numeros'  
              },              
              {
                  label:'No comunes',
                  icon:'pi pi-globe',
                  routerLink: 'noComunes'
              }
          ]
      },
      {
          label:'Pipes personalizados',
          icon:'pi pi-cog',
          items:[
              {
                  label:'Left',
                  icon:'pi pi-fw pi-align-left'
              },
              {
                  label:'Right',
                  icon:'pi pi-fw pi-align-right'
              },
              {
                  label:'Center',
                  icon:'pi pi-fw pi-align-center'
              },
              {
                  label:'Justify',
                  icon:'pi pi-fw pi-align-justify'
              },

          ]
      }     
  ];
}
  

}
