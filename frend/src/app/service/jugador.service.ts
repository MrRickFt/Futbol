import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class JugadorService {
  readonly URL = config.url;

  constructor(private http: HttpClient) {}

  getPosicionesDB(){
    return this.http.get(this.URL + '/api/posiciones/');
  }

  getTeam(){
    return this.http.get(this.URL + '/api/equipo/');
  }

  sendMessage(data: any) {
    return this.http.post(this.URL + '/api/jugador', data);
  }

  save(data: any) {
    return this.http.post(this.URL + '/api/jugador/', data);
  }

  update(data: any) {
    return this.http.put(this.URL + '/api/jugador/', data);
  }

  get() {
    return this.http.get(this.URL + '/api/jugador/');
  }

  getById(id: any | string) {
    return this.http.get(this.URL + `/api/jugador/${id}`);
  }

  search(data: any) {
    return this.http.post(this.URL + '/api/jugador/search', data);
  }

  findById(data: any) {
    return this.http.post(this.URL + '/api/jugador/findById', data);
  }

  deleteById(id: any | string) {
    return this.http.delete(this.URL + `/api/jugador/${id}`);
  }
}