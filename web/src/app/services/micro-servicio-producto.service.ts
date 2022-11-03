import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/Producto';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MicroServicioProductoService {
  productos: Producto[] = [];


  constructor(private _httpClient: HttpClient) {

  }

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

  maxId(){
    return this._httpClient.get<number>('http://localhost:8080/producto/maxId');
  }
}
