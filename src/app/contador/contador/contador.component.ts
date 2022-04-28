//hacemos un componente para utilizarlo despues como si fuese react
//importamos el componente de angularcore como si fuera import react from 'react' 
//la estrutura es similar solo que esta es orientada a clases
//se pone en nombre como con . y component para buena practica me refiero al archivo
import { Component } from '@angular/core';

// Utilizamos el component como decorador
//seria como una funcion con return
@Component({

    selector:'contador-component',
    // aqui ponemos directamente el codigo html el otro es el path o ruta con url
    template: `
<h1>{{titulo}}</h1>
<h3>La Base es <strong>{{base}}</strong></h3>
<!-- ejemplo1 -->
<!-- se pone con () para hacer referencia a un evento -->
<!-- y en " " para hacer un operacion de javascript -->
<!-- <button (click)=" numero=numero+1;">+1</button>
<span >{{numero}}</span>
<button (click)="numero=numero-1;">-1</button> -->
<!-- ejemplo2 -->
<!-- <button (click)="acumulador(+1);">+1</button>
<span >{{numero}}</span>
<button (click)="acumulador(-1);">--1</button> -->
<!-- se puede meter directamente la variable dentro de la funcion sin los {{}} -->
<button (click)="acumulador(base);">+{{base}}</button>
<span >{{numero}}</span>
<button (click)="acumulador(-base);">-{{base}}</button>
`


})
//aqui todo el codigo y el procedimiento que vamos a realizar en el html de este componente
export class ContadorComponente{
 //aqui se ponen las variables que se van a usar en el html y en el html se usa{{igual que react}}

 public titulo: string = 'Contador con Angular';
 public numero: number = 0;
 public base: number = 15;
 //hacemos una funcion para un acumulador

 acumulador(valor: number) {
   //hacemos referencia a this por que es una clase
   
   this.numero += valor;

 }
//aqui lo enviamos ala app.module.ts para que se pueda usar en toda la aplicacion
}