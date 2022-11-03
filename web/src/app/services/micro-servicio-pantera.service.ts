import { HttpClient, HttpHandler, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pantera } from '../models/Pantera';
@Injectable({
  providedIn: 'root'
})
export class MicroServicioPanteraService {
  panteras: Pantera[]=[];
  panteraLogin: Pantera = new Pantera("","","");
  panteraEditar: Pantera = new Pantera("","","");
  cantidadPanteras: number = 0;

  constructor(private _httpClient: HttpClient) {
    this.getAll().subscribe(response => this.panteras = response);
    this.cantidadPanteras = this.panteras.length;
  }

  getAll() {
    return this._httpClient.get<Pantera[]>('http://100.96.1.18:8080/pantera');
  }

  getMateria(id: String) {
    return this._httpClient.get<Pantera>('http://100.96.1.18:8080/pantera/' + id);
  }

  addMateria(pantera: Pantera) {
    return this._httpClient.post('http://100.96.1.18:8080/pantera/register', pantera);
  }


  deleteMateria(pantera: Pantera) {
    return this._httpClient.delete('http://100.96.1.18:8080/pantera/delete/' + pantera.id);
  }

  maxId(){
    return this._httpClient.get<number>('http://100.96.1.18:8080/pantera/maxId');
  }

  
  login(pantera: Pantera){
    var pass: boolean = false;
    
    /*
    this.getToken(materia).subscribe(response => {
      localStorage.setItem('token', JSON.parse(JSON.stringify(response)).token);
      pass = true;
    });
    localStorage.getItem('token') != null ? pass = true : pass = false;
    */

    //Buscar en en arreglo de panteras
    
    this.panteraLogin = pantera;
    localStorage.setItem('token', "ok");
    this.panteras.find(p => pantera.username == p.username) ? pass = true : pass = false;

    return pass;
  }
  validarLogin(){
    var pass: boolean = false;
    localStorage.getItem('token') != null ? pass = true : pass = false;
    return pass;
  }


  getToken(materia: Pantera){
    return this._httpClient.post('http://localhost:8080/authenticate', materia)
  }

  // Make headers to send token for the request
  makeHeaders() {
    let headers = new HttpHeaders();
    const token : string = "Bearer " + localStorage.getItem('token')?.toString();
    headers = headers.append('Authorization', token);
    return headers;
  }

  // Make options to send token for the request
  makeOptions() {
    let options = { headers: this.makeHeaders() };
    return options;
  }

  // make a request to the server whit the token
  protectedRequestALL() {
    var options = this.makeOptions();
    return this._httpClient.get<Pantera[]>('http://100.96.1.4:8080/pantera', options);
  }
  

  protectGetALL(){
    const headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = { headers: headers };
    console.log(options.headers);
    return this._httpClient.get<Pantera[]>('http://100.96.1.4:8080/pantera', options);
  }

  protectedPostMateria(materia: Pantera){
    const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this._httpClient.post('http://100.96.1.4:8080/pantera', materia, {headers});
  }

  protectedDeleteMateria(materia: Pantera){
    const headers = new HttpHeaders()
            .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this._httpClient.delete('http://100.96.1.4:8080/pantera/' + materia.id, {headers});
  }

  protectedGetMateria(id: String){
    const headers = new HttpHeaders()
            .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this._httpClient.get<Pantera>('http://100.96.1.4:8080/pantera/" + id', {headers});
  }

  validarToken(){
    var pass: boolean = true;
    /*
    
    this.protectedRequestALL().subscribe(response => {
      
      if(response.values != null){
      pass = true;
      } else {
      pass = false;
      }

    });
    
    
    */
   
    
    return pass;
  }
}
