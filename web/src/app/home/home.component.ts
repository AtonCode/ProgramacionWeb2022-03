import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MicroServicioPanteraService } from '../services/micro-servicio-pantera.service';
import { Pantera } from '../models/Pantera';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _materiaService: MicroServicioPanteraService;
  title = 'app';
  materias: Pantera[]=[];
  pageTitle: string;
  
  
  constructor(_materiaService: MicroServicioPanteraService, private router: Router) { 
    this._materiaService = _materiaService;
    _materiaService.getAll().subscribe(res => this.materias = res);
    //_materiaService.protectedRequestALL().subscribe(res => this.materias = res);
    this.pageTitle = router.url.replace("/", "").toUpperCase();
   
  }
  ngOnInit(): void {
    
  }
  buttonClick_edit(panteraEditar: Pantera){

    if (confirm('Are you sure you want to edit this?') == true) {
      //Redirigir a componete edit
      this.router.navigate(['edit']);
      //Enviar panteraEditar a editar
      this._materiaService.panteraEditar = panteraEditar;
      
    }else{
      console.log("No se edito");
    }
    

    
  }
  buttonClick_eliminar(materia: Pantera){
    

    if (confirm('Are you sure you want to delete this?') == true) {
      console.log(materia.username);
      //Eliminar de la base de datos
      var NewMateria = new Pantera(materia.id, materia.username, materia.password);
      this._materiaService.deleteMateria(NewMateria).subscribe();
      this.materias = this.materias.filter(c => c.id !== NewMateria.id);
      console.log("Se elimino");
      
    }else{
      console.log("No se elimino");
    }
    

  }
  buttonClick_register(){
    //Redirigir a componete edit
    this.router.navigate(['register']);
    
  }
}
