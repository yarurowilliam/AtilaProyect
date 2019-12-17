import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service'
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {
  estudiantes: Estudiante[];
  searchText: string;
  @Output() seleccionado = new EventEmitter<Estudiante>();
  constructor(private estudianteService: EstudianteService) { }
  
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.estudianteService.getAll().subscribe(estudiantes => this.estudiantes = estudiantes);
    console.log(JSON.stringify(this.estudiantes))
  }

  seleccionar(estudiante: Estudiante) {
    this.seleccionado.emit(estudiante);
}

}
