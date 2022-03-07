import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { io } from 'socket.io-client';
import { config } from 'src/app/config/config';
import { webSocketService } from 'src/app/service/webSocket';
import { HttpClient } from '@angular/common/http';
import { EquipoService } from 'src/app/service/equipo.service';


const socket = io(config.url)


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  readonly URL = config.url;
  

  form: FormGroup
  nombre: AbstractControl
  liga: AbstractControl
  since: AbstractControl
  dt: AbstractControl
  nacionalidad: AbstractControl

  constructor(private fb: FormBuilder, private eService: EquipoService,  private http: HttpClient, private webSocket: webSocketService) {
    
    
    this.form = this.fb.group({
      nombre:['', Validators.required],
      liga:['', Validators.required],
      since:['', Validators.required],
      dt:['', Validators.required],
      nacionalidad:['', Validators.required]
      
    })

    this.nombre = this.form.controls['nombre']
    this.liga = this.form.controls['liga']
    this.since = this.form.controls['since']
    this.dt = this.form.controls['dt']
    this.nacionalidad = this.form.controls['nacionalidad']
    
    this.obtenerRespuesta()

   }

  ngOnInit(): void {
    
  }

  get f(){
    return this.form.controls
  }

  

  guardar(){
    if(this.form.invalid)
    return

    console.log(this.form.value)
    this.webSocket.guardar(this.form.value)
    this.eService.save(this.form.value).subscribe((res:any)=>{
      if (res.status){
        
      }
    })
  }
  

  
  obtenerRespuesta(){
    socket.on('respuesta',(data)=>{
      console.log(data)
    }
    )}

}
