import { HttpClient, HttpHandler, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pantera } from '../models/Pantera';
import {Producto} from '../models/Producto';
@Injectable({
  providedIn: 'root'
})
export class MicroServicioPanteraService {
  panteras: Pantera[]=[];
  productos: Producto[]=[];
  panteraLogin: Pantera = new Pantera("","","");
  panteraEditar: Pantera = new Pantera("","","");
  cantidadPanteras: number = 0;

  constructor(private _httpClient: HttpClient) {
    this.getAll().subscribe(response => this.panteras = response);
    this.cantidadPanteras = this.panteras.length;

  }

  getAll() {
    return this._httpClient.get<Pantera[]>('http://localhost:8080/pantera');
  }

  getMateria(id: String) {
    return this._httpClient.get<Pantera>('http://localhost:8080/pantera/' + id);
  }

  addMateria(materia: Pantera) {
    return this._httpClient.post('http://localhost:8080/pantera/register', materia);
  }


  deleteMateria(materia: Pantera) {
    return this._httpClient.delete('http://localhost:8080/pantera/delete/' + materia.id);
  }

  maxId(){
    return this._httpClient.get<number>('http://localhost:8080/pantera/maxId');
  }


  login(pantera: Pantera){
    var pass: boolean = false;
    var login:boolean = false;

    //reload panteras
    this.getAll().subscribe(response => this.panteras = response);

    this.panteras.find(p => pantera.username == p.username) ? login = true : login = false;
    if(login==true){
      localStorage.setItem('token', "ok");
      this.panteraLogin = pantera;
      pass = true;
    }

    return pass;
  }
  validarLogin(){
    var pass: boolean = false;
    //reload panteras
    this.getAll().subscribe(response => this.panteras = response);

    if(localStorage.getItem('token') == "ok"){
      pass = true;
    }
    //this.panteras.find(p => this.panteraLogin.username == p.username) ? pass = true : pass = false;

    return pass;
  }






  // Servicios para productos
  getProductos() {

    return this._httpClient.get<Producto[]>('http://localhost:8080/producto');

  }

  getProducto(id: String) {

    return this._httpClient.get<Producto>('http://localhost:8080/producto/' + id);

  }

  addProducto(producto: Producto) {

    return this._httpClient.post('http://localhost:8080/producto/crear', producto);

  }

  deleteProducto(producto: Producto) {

    return this._httpClient.delete('http://localhost:8080/producto/delete/' + producto.id);

  }

}
