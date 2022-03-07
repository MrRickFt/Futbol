import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class DetalleService {
  readonly URL = config.url;

  constructor(private http: HttpClient) {}

  getPartidosDB(){
    return this.http.get(this.URL + '/api/partido/');
  }

  getJugadores(){
    return this.http.get(this.URL + '/api/jugador/');
  }

  sendMessage(data: any) {
    return this.http.post(this.URL + '/api/detalle', data);
  }

  save(data: any) {
    return this.http.post(this.URL + '/api/detalle', data);
  }


  get() {
    return this.http.get(this.URL + '/api/detalle/');
  }


  
  
}