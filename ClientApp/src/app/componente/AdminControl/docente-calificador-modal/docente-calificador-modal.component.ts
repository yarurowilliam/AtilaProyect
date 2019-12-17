import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-docente-calificador-modal',
  templateUrl: './docente-calificador-modal.component.html',
  styleUrls: ['./docente-calificador-modal.component.css']
})
export class DocenteCalificadorModalComponent  {

  constructor(public activeModal: NgbActiveModal) { }

  actualizar(docente: Docente) {
    this.activeModal.close(docente);
}
}
