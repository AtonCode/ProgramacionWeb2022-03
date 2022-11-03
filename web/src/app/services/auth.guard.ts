import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MicroServicioPanteraService } from './micro-servicio-pantera.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  microServicioPanteraService: MicroServicioPanteraService | undefined;
  router: Router | undefined;

  constructor(_microServicioPanteraService: MicroServicioPanteraService, router: Router,) {
    this.microServicioPanteraService = _microServicioPanteraService;
    this.router = router;
  }

  canActivate(
    route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var pass: boolean = false;

    if(this.microServicioPanteraService?.validarLogin() == true){
      pass = true;
    }else{
      alert("No tienes permisos para acceder a esta página");
      this.router?.navigate(['/login']);
      pass = false;
    }
      return pass;
  }
}


function toast(arg0: string) {
  throw new Error('Function not implemented.');
}

