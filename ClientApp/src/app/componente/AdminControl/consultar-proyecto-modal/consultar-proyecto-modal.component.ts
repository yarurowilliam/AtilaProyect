import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consultar-proyecto-modal',
  templateUrl: './consultar-proyecto-modal.component.html',
  styleUrls: ['./consultar-proyecto-modal.component.css']
})
export class ConsultarProyectoModalComponent {

  constructor(public activeModal: NgbActiveModal) { }

  actualizar(proyecto: Proyecto) {
    this.activeModal.close(proyecto);
}
}
