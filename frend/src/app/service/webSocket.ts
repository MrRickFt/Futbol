import { Injectable } from "@angular/core";
import { io, Socket } from 'socket.io-client';
import { config } from 'src/app/config/config';
import { Observable } from "rxjs";

const socket = io(config.url)

@Injectable({
  providedIn: 'root'
})

export class webSocketService {

 private socket: Socket
 config = config
  http: any;

  constructor() { 

    this.socket= io(this.config.url)
  }

  
  sendMessage(data: any | string){
      this.socket.emit('sendMessages', {messages:data})
  }

  guardar(data: any | string){
    this.socket.emit('guardar', {documentos: data})
  }

  buscar(data: any) {
    this.socket.emit('buscar', {documentos: data})
  }

  listeNewMessages(){
      return new Observable(observer =>{
          this.socket.on('getNewMessage', msg =>{
              observer.next(msg)
          })
      })
  }

  
}