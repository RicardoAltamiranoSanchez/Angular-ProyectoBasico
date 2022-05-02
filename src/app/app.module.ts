import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppModuleHero} from './heroe/app.hero.module';
import { ContadorModuloApp } from './contador/app.contador.module';
import { DbzModule } from './dbz/dbz.module';
//ejercicio
//comandos para producion ng build --prod crear la carpeta dist

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  //aqui importamos todos lo que sean los modulos
  imports: [
    BrowserModule,
    AppModuleHero,
    ContadorModuloApp,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
