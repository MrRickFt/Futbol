import { Component, OnInit } from '@angular/core';
import { io, Socket} from 'socket.io-client';
import { config } from 'src/app/config/config';
import { JugadorService } from 'src/app/service/jugador.service';

@Component({
  selector: 'app-amd-jugador',
  templateUrl: './amd-jugador.component.html',
  styleUrls: ['./amd-jugador.component.css']
})
export class AmdJugadorComponent implements OnInit {
  updatedSend: any
  reverseData: any
  listJugador: any[] = []
  
  config = config
  socket: Socket 

 
  constructor(private jugService: JugadorService) {
                this.socket = io(this.config.url)
                this.obtenerRespuesta()
              }

  ngOnInit(): void {
    this.getEquipos()
  }

  obtenerRespuesta(){
    this.socket.on('emitiendo',(data)=>{
      this.getEquipos()
    })
  }

  getEquipos(){
    this.jugService.get().subscribe((res:any)=>{
      res.forEach((i:any) => {
        i.textAction = "Editar"
      });
      this.listJugador = res
    })
  }

  search(event: any){
    this.jugService.search({ nombre: event.target.value }).
    subscribe((res:any)=>{
      res.forEach((i:any) => {
        i.status = false
        i.textAction = "Editar"
      });
      this.listJugador = res
    })
    
  }

  reset(index: any){
    console.log( this.reverseData )
    this.listJugador.forEach(i => {
      i.status = false
      i.textAction = "Editar"
      
      })
    /*this.listContact[index] = this.reverseData
    this.listContact[index]['status'] = false
    this.updatedSend = null*/
  }

  edit(item?: any, index?: any){
    if(typeof this.updatedSend === "object" && this.updatedSend != null ){
      this.update()
      this.reset(item);
    }else{
        this.listJugador.forEach(i => {
        i.status = false
        i.textAction = "Editar"
        if(i._id == item._id){
          i.status = true
          i.textAction = "Guardar"
        }
        
      });
      
    }
    
    
  }

  change(item:any, event: any, index: any , propiedad: any){
    this.listJugador[index][propiedad] = event.target.value
    this.updatedSend = this.listJugador[index] 
    this.listJugador.forEach(i => {
      if(i._id == item._id){
        i[propiedad] =  event.target.value
      }
    });
  }
 
  update(){
    this.jugService.update(this.updatedSend).subscribe((res:any)=>{
      console.log( res )
      this.updatedSend = null
    })
  }

  delete(_id:string){
    console.log( _id )
    this.jugService.deleteById(_id).subscribe((res:any)=>{
      this.getEquipos()
    })
  }

  findById(_id: string){
    console.log( _id )
    this.jugService.findById(_id).subscribe((res:any)=>{
      console.log( res )
    })
  }

}
