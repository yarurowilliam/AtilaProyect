import { Component, Output,OnInit,EventEmitter } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service'
import { Asignatura } from 'src/app/models/asignatura';

@Component({
  selector: 'app-asignatura-list',
  templateUrl: './asignatura-list.component.html',
  styleUrls: ['./asignatura-list.component.css']
})
export class AsignaturaListComponent implements OnInit {
  asignaturas: Asignatura[];
  @Output() seleccionado = new EventEmitter<Asignatura>();
  constructor(private asignaturaservice: AsignaturaService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.asignaturaservice.getAll().subscribe(asignaturas => this.asignaturas = asignaturas);
    console.log(JSON.stringify(this.asignaturas))
  }
  seleccionar(asignatura: Asignatura) {
    this.seleccionado.emit(asignatura);
}

}
