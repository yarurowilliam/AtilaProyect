import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Rubrica } from 'src/app/models/rubrica';

@Component({
  selector: 'app-rubrica-list-modal',
  templateUrl: './rubrica-list-modal.component.html',
  styleUrls: ['./rubrica-list-modal.component.css']
})
export class RubricaListModalComponent   {

  constructor(public activeModal: NgbActiveModal) { }

  actualizar(rubrica: Rubrica) {
    this.activeModal.close(rubrica);
}

}
