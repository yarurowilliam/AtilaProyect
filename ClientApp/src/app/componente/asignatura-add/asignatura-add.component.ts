import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service'
import { Asignatura } from 'src/app/models/asignatura';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MensajeModalComponent } from 'src/app/mensaje-modal/mensaje-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalComponent } from 'src/app/componente/alert-modal/alert-modal.component';

@Component({
  selector: 'app-asignatura-add',
  templateUrl: './asignatura-add.component.html',
  styleUrls: ['./asignatura-add.component.css']
})
export class AsignaturaAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private asignaturaService: AsignaturaService, private modalService: NgbModal, private formBuilder: FormBuilder) { }
  asignatura: Asignatura;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(3)]],
      nombreAsignatura: ['', Validators.required]
    });
    this.asignatura = new Asignatura();
  }



  
  get f() { return this.registerForm.controls; }


  
  create() {
    this.asignatura = this.registerForm.value;

    this.asignaturaService.post(this.asignatura).subscribe(c => {
        if (c != null) {
            const messageBox = this.modalService.open(AlertModalComponent)
            messageBox.componentInstance.title = "Resultado Operación";
            messageBox.componentInstance.message = 'Se agrego correctamente la asignatura!';
        }
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.create();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


}
