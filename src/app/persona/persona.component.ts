import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'app/persona.model';
import { PersonasService } from 'app/PersonasService.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona:Persona;
  @Input() indice:number;

  constructor(private personaService:PersonasService) {

   }

  ngOnInit() {
  }

  emitirSaludo(){
    this.personaService.saludo.emit(this.indice);
  }
}
