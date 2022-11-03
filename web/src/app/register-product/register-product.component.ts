import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../models/Producto';
import { MicroServicioProductoService } from '../services/micro-servicio-producto.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  productoAUX: Producto = new Producto("1","hello", "world");
  productos: Producto[] = [];
  pageTitle: string | undefined;
  productoService: MicroServicioProductoService | undefined;


  constructor(_productoService: MicroServicioProductoService, private router: Router) {
    this.productoService = _productoService;
    this.pageTitle = router.url.replace("/", "").toUpperCase();

  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    var _producto: Producto  = new Producto(f.value.id, f.value.nombre, f.value.existencias);
    this.productoAUX = _producto;
    this.productoService?.addProducto(this.productoAUX).subscribe();
    this.productoService?.getProductos().subscribe(response => this.productos = response);
    console.log(this.productos);
    console.log(f.value);  // { first: '', last: '' }
    console.log(this.productoAUX.id);
    console.log(this.productoAUX.nombre);
    console.log(this.productoAUX.existencias);
    this.router.navigate(['/home']);
  }

}
