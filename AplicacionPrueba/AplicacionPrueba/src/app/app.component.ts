import {Component, OnInit} from "@angular/core";
import {Response, Http} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MasterURLService]
})
// CTRL A +  -  CTRL + ALT + L
export class AppComponent implements OnInit {
  title: string = "Bienvenido a Ingresar Tiendas";
  nuevaTienda = {};
  tiendas = [];

  disabledButtons = {
    NuevaTiendaFormSubmitButton: false
  };

  constructor(private _http: Http,
              private _masterURL: MasterURLService) {

  }

  ngOnInit() {
    this._http.get(this._masterURL.url+"Tienda")
      .subscribe(
        (res:Response)=>{
          this.tiendas = res.json();
        },
        (err)=>{
          console.log(err);
        }
      )
  }

  crearTienda(formulario) {
    this.disabledButtons.NuevaTiendaFormSubmitButton = true;
    console.log(formulario);

    this._http.post(this._masterURL.url + "Tienda", {
      nombre: formulario.value.nombre
    }).subscribe(
      (res) => {
        console.log("No hubo Errores");
        console.log(res);
        this.nuevaTienda = {};
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
      },
      (err) => {
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
        console.log("Ocurrio un error", err);
      },
      () => {
        console.log("Termino la función vamos a las casas")
      }
    );

    // .post("http://localhost:1337/Tienda", formulario.valores)
    // .subscribe(
    //   res=>console.log('Respuesta: ',res),
    //   err=>console.log('Error: ',err),
    //   ()=>{
    //     console.log("Se completo la accion")
    //   }
    // );
  }
}
