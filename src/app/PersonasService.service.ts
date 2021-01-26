import {Persona} from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService{

  personas:Persona[] = [
    new Persona("Juan", "Perez"),
    new Persona("Esau", "Alvarez")
  ];
  saludo = new EventEmitter<number>();

  constructor(private loggingService:LoggingService){

  }

  agregarPersona(persona: Persona){
    this.personas.push(persona);
    this.loggingService.muestraMensaje("Persona : " + persona.nombre + " " + persona.apellido);
  }
}
