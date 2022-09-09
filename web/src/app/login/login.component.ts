import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pantera } from '../models/Pantera';
import { MicroServicioPanteraService } from '../services/micro-servicio-pantera.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  materia: Pantera = new Pantera("4","hello", "world");
  _materiaService: MicroServicioPanteraService | undefined;
  pageTitle: string | undefined;
  
  constructor(_materiaService: MicroServicioPanteraService, private router: Router) {
    
    this._materiaService = _materiaService;
    this.pageTitle = router.url.replace("/", "").toUpperCase();
    
  }
  ngOnInit(): void {
    
  }
  
  buttonClick_register(){
    //Redirigir a componete edit
    this.router.navigate(['register']);
    
  }

  onSubmit(f: NgForm) {
    var _materia: Pantera  = new Pantera("", f.value.username, f.value.password);
    console.log(_materia.username);
    console.log(_materia.password);

    if(this._materiaService?.login(_materia)==true){

      this.router.navigate(['home']);
      console.log(localStorage.getItem("token"));
      console.log("Login correcto", this._materiaService.login(_materia));

    }else{
      console.log("Login incorrecto");
      this.router.navigate(['login']);
    }


    /**
     * 
     this._materiaService?.getMateria(_materia.id).subscribe(x => this.materia = x);

    if(this.materia.id == f.value.id){
      this.router.navigate(['home']);
    }
    else{
      this.router.navigate(['login']);
    }
     */
    
    
    
  }

}
