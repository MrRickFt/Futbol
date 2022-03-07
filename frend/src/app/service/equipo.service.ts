import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  readonly URL = config.url;

  constructor(private http: HttpClient) {}

  getPosicionesDB(){
    return this.http.get(this.URL + '/api/posiciones/');
  }

  sendMessage(data: any) {
    return this.http.post(this.URL + '/api/equipo', data);
  }

  save(data: any) {
    return this.http.post(this.URL + '/api/equipo', data);
  }

  update(data: any) {
    return this.http.put(this.URL + '/api/equipo/', data);
  }

  get() {
    return this.http.get(this.URL + '/api/equipo/');
  }

  getById(id: any | string) {
    return this.http.get(this.URL + `/api/equipo/${id}`);
  }

  search(data: any) {
    return this.http.post(this.URL + '/api/equipo/search', data);
  }

  findById(data: any) {
    return this.http.post(this.URL + '/api/equipo/findById', data);
  }

  deleteById(id: any | string) {
    return this.http.delete(this.URL + `/api/equipo/${id}`);
  }
}