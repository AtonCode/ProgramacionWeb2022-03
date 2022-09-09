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
    //_materiaService.getAll().subscribe(res => this.materias = res);
    _materiaService.protectedRequestALL().subscribe(res => this.materias = res);
    this.pageTitle = router.url.replace("/", "").toUpperCase();
   
  }
  ngOnInit(): void {
    
  }
  buttonClick_edit(){
    //Redirigir a componete edit
    this.router.navigate(['edit']);
    
  }
  buttonClick_eliminar(materia: Pantera){
    console.log(materia.username);
    //Eliminar de la base de datos
    const NewMateria = new Pantera(materia.id, materia.username, materia.password);
    this._materiaService.protectedDeleteMateria(NewMateria).subscribe();
    this.materias = this.materias.filter(c => c.id !== NewMateria.id);
  }
  buttonClick_register(){
    //Redirigir a componete edit
    this.router.navigate(['register']);
    
  }
}
