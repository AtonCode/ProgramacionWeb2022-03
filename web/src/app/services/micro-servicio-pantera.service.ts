import { HttpClient, HttpHandler, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pantera } from '../models/Pantera';
@Injectable({
  providedIn: 'root'
})
export class MicroServicioPanteraService {
  constructor(private _httpClient: HttpClient) { }

  getAll() {
    return this._httpClient.get<Pantera[]>('http://10.195.44.218:8080/pantera');
  }

  getMateria(id: String) {
    return this._httpClient.get<Pantera>('http://10.195.44.218:8080/pantera/' + id);
  }

  addMateria(materia: Pantera) {
    return this._httpClient.post('http://10.195.44.218:8080/register', materia);
  }


  deleteMateria(materia: Pantera) {
    return this._httpClient.delete('http://10.195.44.218:8080/pantera/' + materia.id);
  }

  getToken(materia: Pantera){
    return this._httpClient.post('http://10.195.44.218:8080/authenticate', materia)
  }

  login(materia: Pantera){
    var pass: boolean = false;
    this.getToken(materia).subscribe(response => {
      localStorage.setItem('token', JSON.parse(JSON.stringify(response)).token);
      pass = true;
    });
    localStorage.getItem('token') != null ? pass = true : pass = false;
    return pass;
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
    return this._httpClient.get<Pantera[]>('http://10.195.44.218:8080/pantera', options);
  }
  

  protectGetALL(){
    const headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const options = { headers: headers };
    console.log(options.headers);
    return this._httpClient.get<Pantera[]>('http://10.195.44.218:8080/pantera', options);
  }

  protectedPostMateria(materia: Pantera){
    const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this._httpClient.post('http://10.195.44.218:8080/pantera', materia, {headers});
  }

  protectedDeleteMateria(materia: Pantera){
    const headers = new HttpHeaders()
            .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this._httpClient.delete('http://10.195.44.218:8080/pantera/' + materia.id, {headers});
  }

  protectedGetMateria(id: String){
    const headers = new HttpHeaders()
            .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this._httpClient.get<Pantera>('http://10.195.44.218:8080/pantera/" + id', {headers});
  }

  validarToken(){
    var pass: boolean = false;
    this.protectedRequestALL().subscribe(response => {
      
      if(response.values != null){
      pass = true;
      } else {
      pass = false;
      }

    });
    
    return pass;
  }
}
