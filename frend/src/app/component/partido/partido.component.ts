import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { io } from 'socket.io-client';
import { config } from 'src/app/config/config';
import { webSocketService } from 'src/app/service/webSocket';
import { HttpClient } from '@angular/common/http';
import { PartidoService } from 'src/app/service/partido.service';
import { json } from 'body-parser';

const socket = io(config.url)

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {
  readonly URL = config.url;
  
  listTeams: any =[];
 

  form: FormGroup
  equipoLocal: AbstractControl
  equipoVisitante: AbstractControl
  dia: AbstractControl
  hora: AbstractControl
 
  constructor(private fb: FormBuilder, private pService: PartidoService,  private http: HttpClient, private webSocket: webSocketService) {
    
    
    this.form = this.fb.group({
      equipoLocal:['', Validators.required],
      equipoVisitante:['', Validators.required],
      dia:['', Validators.required],
      hora:['', Validators.required],
      
      
      
    })

    this.equipoLocal = this.form.controls['equipoLocal']
    this.equipoVisitante = this.form.controls['equipoVisitante']
    this.dia = this.form.controls['dia']
    this.hora = this.form.controls['hora']
   
    
    
    this.obtenerRespuesta()

   }

  ngOnInit(): void {
    this.obtenerEquipo()
    
    
  }

  get f(){
    return this.form.controls
  }

  
  obtenerEquipo(){
    this.pService.getTeam().subscribe(data =>{
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
    this.pService.save(this.form.value).subscribe((res:any)=>{
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
