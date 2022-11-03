import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pantera } from '../models/Pantera';
import { Producto } from '../models/Producto';
import { MicroServicioPanteraService } from '../services/micro-servicio-pantera.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productoAUX: Producto = new Producto("1","hello", "world");
  productos: Producto[] = [];
  pageTitle: string | undefined;
  productoService: MicroServicioPanteraService | undefined;


  constructor(_productoService: MicroServicioPanteraService, private router: Router) {
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
