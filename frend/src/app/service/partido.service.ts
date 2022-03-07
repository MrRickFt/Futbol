import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class PartidoService {
  readonly URL = config.url;

  constructor(private http: HttpClient) {}

  getPosicionesDB(){
    return this.http.get(this.URL + '/api/posiciones/');
  }


  getTeam(){
    return this.http.get(this.URL + '/api/equipo/');
  }

  sendMessage(data: any) {
    return this.http.post(this.URL + '/api/partido', data);
  }

  save(data: any) {
    return this.http.post(this.URL + '/api/partido', data);
  }

  update(data: any) {
    return this.http.put(this.URL + '/api/partido/', data);
  }

  get() {
    return this.http.get(this.URL + '/api/partido/');
  }

  getById(id: any | string) {
    return this.http.get(this.URL + `/api/partido/${id}`);
  }

  search(data: any) {
    return this.http.post(this.URL + '/api/partido/search', data);
  }

  

  findById(data: any) {
    return this.http.post(this.URL + '/api/partido/findById', data);
  }

  deleteById(id: any | string) {
    return this.http.delete(this.URL + `/api/partido/${id}`);
  }
}