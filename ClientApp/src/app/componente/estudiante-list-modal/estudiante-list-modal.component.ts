import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-estudiante-list-modal',
  templateUrl: './estudiante-list-modal.component.html',
  styleUrls: ['./estudiante-list-modal.component.css']
})
export class EstudianteListModalComponent {

  constructor(public activeModal: NgbActiveModal) { }

  actualizarEstudiante(estudiante: Estudiante) {
    this.activeModal.close(estudiante);
}

}
