import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';


//primeNg
import  {ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule    
  ],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule   
    
  ]
})
export class PrimeNgModule { }
