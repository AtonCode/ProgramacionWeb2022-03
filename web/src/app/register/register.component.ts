import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink, UrlHandlingStrategy } from '@angular/router';
import { Pantera } from '../models/Pantera';
import { MicroServicioPanteraService } from '../services/micro-servicio-pantera.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  materia: Pantera = new Pantera("4","hello", "world");
  pageTitle: string | undefined;
  _materiaService: MicroServicioPanteraService | undefined;
  maxId: number = 0;
  
  
  constructor(_materiaService: MicroServicioPanteraService, private router: Router) {
    
    this._materiaService = _materiaService;
    this.pageTitle = router.url.replace("/", "").toUpperCase();
    this._materiaService.maxId();
    this._materiaService.maxId().subscribe(response => this.maxId = response);
    this.maxId++;
    console.log(this.maxId);
    
  }
  ngOnInit(): void {

  }

  onSubmit(f: NgForm) {
  
    var _materia: Pantera  = new Pantera(this.maxId.toString(), f.value.username, f.value.password);
    this.materia = _materia;
    this._materiaService?.addMateria(this.materia).subscribe();
    this.router.navigate(['/home']);
    
   

    console.log(f.value);  // { first: '', last: '' }
    console.log(this.materia.id);
    console.log(this.materia.username);

    
  }

}
