import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { io } from 'socket.io-client';
import { JugadorService } from 'src/app/service/jugador.service';
import { config } from 'src/app/config/config';
import { webSocketService } from 'src/app/service/webSocket';
import { HttpClient } from '@angular/common/http';




const socket = io(config.url)


@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  listPosiciones: any = [];
  listTeams: any =[];
  

  form: FormGroup
  nombre: AbstractControl
  edad: AbstractControl
  pieDom: AbstractControl
  posicion: AbstractControl
  equipoActual: AbstractControl
  nacionalidad: AbstractControl

  constructor(private fb: FormBuilder, private jService: JugadorService,   private http: HttpClient, private webSocket: webSocketService) {
    this.form = this.fb.group({
      nombre:['', Validators.required],
      edad:['', Validators.required],
      pieDom:['', Validators.required],
      posicion:['', Validators.required],
      equipoActual:['', Validators.required],
      nacionalidad:['', Validators.required]
      
    })

    this.nombre = this.form.controls['nombre']
    this.edad = this.form.controls['edad']
    this.pieDom = this.form.controls['pieDom']
    this.posicion = this.form.controls['posicion']
    this.equipoActual = this.form.controls['equipoActual']
    this.nacionalidad = this.form.controls['nacionalidad']
    
    this.obtenerRespuesta()

   }

  ngOnInit(): void {
    this.obtenerLista();
    this.obtenerEquipo()
  }

  get f(){
    return this.form.controls
  }

obtenerLista(){
  this.jService.getPosicionesDB().subscribe(data =>{
    console.log(data)
    this.listPosiciones = data;
  }, err =>{
    console.log(err)
  })
}

obtenerEquipo(){
  this.jService.getTeam().subscribe(data =>{
    console.log(data)
    this.listTeams = data;
  }, err =>{
    console.log(err)
  })

}

  guardar(){
    if(this.form.invalid)
    return

    console.log(this.form.value)
    this.webSocket.guardar(this.form.value)
    this.jService.save(this.form.value).subscribe((res:any)=>{
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
