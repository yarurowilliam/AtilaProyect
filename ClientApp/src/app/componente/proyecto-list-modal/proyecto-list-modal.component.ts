import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyecto-list-modal',
  templateUrl: './proyecto-list-modal.component.html',
  styleUrls: ['./proyecto-list-modal.component.css']
})
export class ProyectoListModalComponent  {

  constructor(public activeModal: NgbActiveModal) { }

  actualizar(proyecto: Proyecto) {
    this.activeModal.close(proyecto);
}


}
