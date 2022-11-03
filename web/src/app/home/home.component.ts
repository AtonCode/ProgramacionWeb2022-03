import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pantera } from '../models/Pantera';
import { Producto } from '../models/Producto';
import { MicroServicioPanteraService } from '../services/micro-servicio-pantera.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _materiaService: MicroServicioPanteraService;
  title = 'app';
  productos: Producto[]=[];
  carrito:Producto []=[];
  pageTitle: string;
  panteraLoginName: String = "";


  constructor(_materiaService: MicroServicioPanteraService, private router: Router) {
    this._materiaService = _materiaService;
    this.pageTitle = router.url.replace("/", "").toUpperCase();
    this.cargarProductos();
    this.panteraLoginName = this._materiaService.panteraLogin.username;


  }
  ngOnInit(): void {

  }
  cargarProductos(): void {
    this._materiaService.getProductos().subscribe(res => this.productos = res);
  }
  buttonClick_eliminar(materia: Producto){


    if (confirm('Are you sure you want to delete this?') == true) {
   //   console.log(materia.nombre);
      //Eliminar de la base de datos
      var NewMateria = new Producto(materia.id, materia.nombre, materia.existencias);
      this._materiaService.deleteProducto(NewMateria).subscribe();
      this.productos = this.productos.filter(c => c.id !== NewMateria.id);
      console.log("Se elimino");

    }else{
      console.log("No se elimino");
    }


  }
  buttonClick_comprar(materia: Producto){
    if (confirm('Seguro que desea comprar el producto?') == true) {
    const num =parseInt(materia.existencias)-1;
    if(num==0){
      this._materiaService.deleteProducto(materia).subscribe(
        data => {
          this.cargarProductos();
          this.carrito.push(materia);
        },
      );
    }
   else{
    const NewProducto={id: materia.id,nombre: materia.nombre,existencias: num.toString()};
    this._materiaService.addProducto(NewProducto).subscribe(
      data => {
        this.cargarProductos();
        this.carrito.push(materia);
      },
    );
  }
}else{
  console.log("No se compro");

}
  }

  buttonClick_register(){
    this.router.navigate(['edit']);
  }
}
