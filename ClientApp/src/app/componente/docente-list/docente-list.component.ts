import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service'
import { Docente } from 'src/app/models/docente';
@Component({
  selector: 'app-docente-list',
  templateUrl: './docente-list.component.html',
  styleUrls: ['./docente-list.component.css']
})
export class DocenteListComponent implements OnInit {
  docentes: Docente[];
  constructor(private docenteService: DocenteService) { }
  @Output() seleccionado = new EventEmitter<Docente>();
  searchText: string;
  ngOnInit() {
    this.getAll();
    this.searchText=''
  }

  getAll() {
    this.docenteService.getAll().subscribe(docentes => this.docentes = docentes);
    console.log(JSON.stringify(this.docentes))
  }

  seleccionar(docente: Docente) {
    this.seleccionado.emit(docente);
  }
}
