import { Component, OnInit } from '@angular/core';
import { io, Socket} from 'socket.io-client';
import { config } from 'src/app/config/config';
import { EquipoService } from 'src/app/service/equipo.service';


@Component({
  selector: 'app-amd-equipo',
  templateUrl: './amd-equipo.component.html',
  styleUrls: ['./amd-equipo.component.css']
})
export class AmdEquipoComponent implements OnInit {
  updatedSend: any
  reverseData: any
  listEquipo: any[] = []
  
  config = config
  socket: Socket 

 
  constructor(private eqService: EquipoService) {
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
    this.eqService.get().subscribe((res:any)=>{
      res.forEach((i:any) => {
        i.textAction = "Editar"
      });
      this.listEquipo = res
    })
  }

  search(event: any){
    this.eqService.search({ nombre: event.target.value }).
    subscribe((res:any)=>{
      res.forEach((i:any) => {
        i.status = false
        i.textAction = "Editar"
      });
      this.listEquipo = res
    })
    
  }

  reset(index: any){
    console.log( this.reverseData )
    this.listEquipo.forEach(i => {
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
        this.listEquipo.forEach(i => {
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
    this.listEquipo[index][propiedad] = event.target.value
    this.updatedSend = this.listEquipo[index] 
    this.listEquipo.forEach(i => {
      if(i._id == item._id){
        i[propiedad] =  event.target.value
      }
    });
  }
 
  update(){
    this.eqService.update(this.updatedSend).subscribe((res:any)=>{
      console.log( res )
      this.updatedSend = null
    })
  }

  delete(_id:string){
    console.log( _id )
    this.eqService.deleteById(_id).subscribe((res:any)=>{
      this.getEquipos()
    })
  }

  findById(_id: string){
    console.log( _id )
    this.eqService.findById(_id).subscribe((res:any)=>{
      console.log( res )
    })
  }

}
