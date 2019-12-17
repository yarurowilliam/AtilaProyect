import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service'
import { Docente } from 'src/app/models/docente';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-consultar-docente',
  templateUrl: './consultar-docente.component.html',
  styleUrls: ['./consultar-docente.component.css']
})
export class ConsultarDocenteComponent implements OnInit {
  docentes: Docente[];
  constructor(private modalService: NgbModal,private docenteService: DocenteService) { }
  @Output() seleccionado = new EventEmitter<Docente>();
  searchText: string;
  ngOnInit() {
    this.getAll();
    this.searchText='Revisador';
  }

  getAll() {
    this.docenteService.getAll().subscribe(docentes => this.docentes = docentes);
    console.log(JSON.stringify(this.docentes))
  }

  seleccionar(docente: Docente) {
    this.seleccionado.emit(docente);
  }

}
