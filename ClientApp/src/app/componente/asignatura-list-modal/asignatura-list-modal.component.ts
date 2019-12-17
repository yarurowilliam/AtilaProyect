import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-asignatura-list-modal',
  templateUrl: './asignatura-list-modal.component.html',
  styleUrls: ['./asignatura-list-modal.component.css']
})
export class AsignaturaListModalComponent{

  constructor(public activeModal: NgbActiveModal) { }

  actualizarAsignatura(asignatura: Asignatura) {
    this.activeModal.close(asignatura);
  }

}
