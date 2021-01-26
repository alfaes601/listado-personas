import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './PersonasService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Listado de Personas';
  personas:Persona[] = [];

  constructor(private logginService:LoggingService,
              private personasService:PersonasService){

  }

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  onPersonaAgregada(persona:Persona){
    this.personasService.agregarPersona(persona);
  }
}
