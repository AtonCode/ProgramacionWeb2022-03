import { getHtmlTagDefinition, identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pantera } from '../models/Pantera';
import { MicroServicioPanteraService } from '../services/micro-servicio-pantera.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
username: any;
microservicesRestApi: MicroServicioPanteraService | undefined;
pantera: Pantera = new Pantera("0","test","test");
panteras: Pantera[] = [];
  router: any;

  constructor(_microservicesRestApi: MicroServicioPanteraService, _router: RouterLink) {
    this.microservicesRestApi = _microservicesRestApi;
    this.router = _router;
  }


  ngOnInit(): void {
  }

  getPantera() {
    this.microservicesRestApi?.protectedGetMateria(this.username).subscribe(res => this.pantera = res);
    this.panteras.push(this.pantera);
    console.log(this.pantera.username);
  }

  buttonClick_edit() {
    this.router.navigate(['edit']);
  }
  buttonClick_eliminar(pantera: Pantera) {
    //Elimar pantera en la lista de this.panteras
    this.panteras = this.panteras.filter(p => p.id !== pantera.id);
  }

}
