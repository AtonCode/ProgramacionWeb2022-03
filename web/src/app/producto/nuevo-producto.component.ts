import { Component, OnInit } from '@angular/core';
import { MicroServicioProductoService } from '../services/micro-servicio-producto.service';
import { Producto } from '../models/Producto';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nuevo-producto',
    templateUrl: './nuevo-producto.component.html',
})
export class NuevoProductoComponent implements OnInit {

  id='';
  nombre = '';
  existencias = '';

  constructor(
    private productoService: MicroServicioProductoService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const producto = new Producto(this.id,this.nombre, this.existencias);
    this.productoService.addProducto(producto).subscribe();
  }

}
