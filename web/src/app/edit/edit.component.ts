import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pantera } from '../models/Pantera';
import { MicroServicioPanteraService } from '../services/micro-servicio-pantera.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  materia: Pantera = new Pantera("4","hello", "world");
  _materiaService: MicroServicioPanteraService;
  
  constructor(_materiaService: MicroServicioPanteraService, private router: Router) {
    
    this._materiaService = _materiaService;
    
  }
  ngOnInit(): void {
    
  }

  onSubmit(f: NgForm) {
    var _materia: Pantera  = new Pantera(this._materiaService?.panteraEditar.id, f.value.username, f.value.password);
    this.materia = _materia;
    this._materiaService?.addMateria(this.materia).subscribe();

    console.log(f.value);  // { first: '', last: '' }
    console.log(this.materia.id);
    console.log(this.materia.username);
    
  }

}
