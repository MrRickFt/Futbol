import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { io } from 'socket.io-client';
import { config } from 'src/app/config/config';
import { webSocketService } from 'src/app/service/webSocket';
import { HttpClient } from '@angular/common/http';
import { DetalleService } from 'src/app/service/detalles.service';
import { PartidoService } from 'src/app/service/partido.service';
import { JugadorService } from 'src/app/service/jugador.service';
import { EquipoService } from 'src/app/service/equipo.service';


const socket = io(config.url)
@Component({
  selector: 'app-detalles-partido',
  templateUrl: './detalles-partido.component.html',
  styleUrls: ['./detalles-partido.component.css']
})
export class DetallesPartidoComponent implements OnInit {
  readonly URL = config.url;
  
  listTeams: any =[];
  listPartido: any = [];
  listJugadores: any = [];
 

  form: FormGroup
  idPartido: AbstractControl
  resultado: AbstractControl
  tiempoExtra: AbstractControl
  penaltis: AbstractControl
  detallesGoles: AbstractControl
  tarjetas:AbstractControl
  cambiosJugadores:AbstractControl
  jugadorDestacado: AbstractControl
  jugadaVar: AbstractControl
  
  
 
 

  constructor(private fb: FormBuilder, private dService: DetalleService, private eService: EquipoService, private pService: PartidoService,
              private http: HttpClient,
              private webSocket: webSocketService) {
    
    
    this.form = this.fb.group({
      idPartido:['', Validators.required],
      resultado:['', Validators.required],
      tiempoExtra:['', Validators.required],
      penaltis:['', Validators.required],
      detallesGoles:['', Validators.required],
      tarjetas:['', Validators.required],
      cambiosJugadores:['', Validators.required],
      jugadorDestacado:['', Validators.required], 
      jugadaVar:['', Validators.required],
     
      
      
      
    })

    this.idPartido = this.form.controls['idPartido']
    this.resultado = this.form.controls['resultado']
    this.tiempoExtra = this.form.controls['tiempoExtra']
    this.penaltis = this.form.controls['penaltis']
    this.detallesGoles = this.form.controls['detallesGoles']
    this.tarjetas = this.form.controls['tarjetas']
    this.cambiosJugadores = this.form.controls['cambiosJugadores']
    this.jugadorDestacado = this.form.controls['jugadorDestacado']
    this.jugadaVar = this.form.controls['jugadaVar']
   
   
    
    
    this.obtenerRespuesta()

   }

  ngOnInit(): void {
    this.obtenerEquipo()
    this.obtenerPartido()
    this.obtenerJugadores()
    
  }

  

  get f(){
    return this.form.controls
  }

  //*****************PENDIENTE */
  obtenerEquipo(){
    this.eService.get().subscribe(data =>{
      console.log(data)
      this.listTeams = data;
    }, err =>{
      console.log(err)
    })
  
  }

  obtenerPartido(){
    this.dService.getPartidosDB().subscribe(data =>{
      console.log(data)
      this.listPartido = data;
    }, err =>{
      console.log(err)
    })
  }

  obtenerJugadores(){
    this.dService.getJugadores().subscribe(data =>{
      console.log(data)
      this.listJugadores = data;
    }, err =>{
      console.log(err)
    })
  }
  

//Guardando en detalles
  guardar(){
    if(this.form.invalid)
    return

    console.log(this.form.value)
    this.webSocket.guardar(this.form.value)
    this.dService.save(this.form.value).subscribe((res:any)=>{
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

  

 


