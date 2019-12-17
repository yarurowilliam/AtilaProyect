import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consultar-docente-modal',
  templateUrl: './consultar-docente-modal.component.html',
  styleUrls: ['./consultar-docente-modal.component.css']
})
export class ConsultarDocenteModalComponent {

  constructor(public activeModal: NgbActiveModal) { }

  actualizar(docente: Docente) {
    this.activeModal.close(docente);
}
}
