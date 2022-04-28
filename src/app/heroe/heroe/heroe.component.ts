import { Component } from '@angular/core';   



@Component({
selector: 'app-heroe',
templateUrl: 'heroe.component.html'


})

export class HeroeComponent {

public nombre:string="Batman";
public edad:number=30;
//el get es solo para obtener el valor ya esta incoporado a angular es igual que java
get Capitalizado():string{
 return this.nombre.toUpperCase();
}


ObtenerNombre():string{
 return `Nombre:${this.nombre} Edad:${this.edad}`
}
CambiarNombre():void{
 this.nombre="Superman";
}
CambiarEdad():void{
this.edad=50;

}

}