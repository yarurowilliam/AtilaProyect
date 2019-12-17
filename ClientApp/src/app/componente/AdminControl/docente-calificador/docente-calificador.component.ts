import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service'
import { Docente } from 'src/app/models/docente';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-docente-calificador',
  templateUrl: './docente-calificador.component.html',
  styleUrls: ['./docente-calificador.component.css']
})
export class DocenteCalificadorComponent implements OnInit {
  docentes: Docente[];
  constructor(private modalService: NgbModal,private docenteService: DocenteService) { }
  @Output() seleccionado = new EventEmitter<Docente>();
  searchText: string;
  ngOnInit() {
    this.getAll();
    this.searchText='Calificador';
  }
  getAll() {
    this.docenteService.getAll().subscribe(docentes => this.docentes = docentes);
    console.log(JSON.stringify(this.docentes))
  }

  seleccionar(docente: Docente) {
    this.seleccionado.emit(docente);
  }

}
