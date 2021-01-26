import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Persona } from 'app/persona.model';
import { LoggingService } from 'app/LoggingService.service';
import { PersonasService } from 'app/PersonasService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombreInput:string;
  apellidoInput:string;

  constructor(private logginService:LoggingService,
              private personasService:PersonasService) {

      this.personasService.saludo.subscribe(
        (indice:number) => alert("El indice es: "+indice)
      )

   }

  ngOnInit() {
  }

  onAgregarPersona(){
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    //this.logginService.muestraMensaje("Persona : " + persona.nombre + " " + persona.apellido);
    this.personasService.agregarPersona(persona);
    //this.personaCreada.emit(persona);
    //this.nombreInput = "";
    //this.apellidoInput = "";
  }
}
