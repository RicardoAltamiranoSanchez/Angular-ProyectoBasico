import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';//metodo para los formulario exclusivo de angular

import { DragonBallComponent } from './main-page/dragonball.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './service/dragonball.service';



@NgModule({
  declarations: [
    DragonBallComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  
  exports:[
    DragonBallComponent
  ],
  imports: [
    CommonModule,
    FormsModule//importamos el modulo de formulario para utilizar sus metodos
    
  ],
  //los providers son todos los servicios
  //sirve para tener una unica instancia mas bien seria hacerlo globales
  providers: [
    DbzService
  
  ]
})
export class DbzModule { }
//para crear un modulo en angula en la terminal de cmd ng g m dbz con la m de modulo
//para crear un componente en la termina y de forma automatica ng g c dbz/mainPage --skipTests
//el --skipTest es para que no se genere el test automaticamente
