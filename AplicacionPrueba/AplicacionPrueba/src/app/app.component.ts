import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = "Hola Amigos";
  nombre: string = "";
  apellido: string = "";
  colorH3 = "red";

  nuevaTienda:any={};

  constructor() {
    this.apellido = "Eguez";
    this.nombre = "Adrian";
    console.log("Inicio el constructor")
  }

  ngOnInit() {
    this.apellido = "Sarzosa";
    this.nombre = "Vicente";
    console.log("On Init")
  }

  nombresss():string{
    return `${this.nombre} ${this.apellido}`
  }
  clickear(){
    console.log("Hizo Click");
    //console.log(nombreUsuario);
  }
  focus(){
    console.log("Hizo Focus");
    //console.log(nombreUsuario);
  }

  crearTienda(formulario){
    console.log(formulario);
  }
}
