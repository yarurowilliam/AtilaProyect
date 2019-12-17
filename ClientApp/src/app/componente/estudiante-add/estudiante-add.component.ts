import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service'
import { Estudiante } from 'src/app/models/estudiante';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/componente/alert-modal/alert-modal.component';

@Component({
  selector: 'app-estudiante-add',
  templateUrl: './estudiante-add.component.html',
  styleUrls: ['./estudiante-add.component.css']
})
export class EstudianteAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private estudianteService: EstudianteService, private modalService: NgbModal, private formBuilder: FormBuilder) { }
  estudiante: Estudiante;

  ngOnInit() {
    this.estudiante = new Estudiante();  
    this.registerForm = this.formBuilder.group({
      identificacion: [this.estudiante.identificacion, [Validators.required, Validators.minLength(3)]],
      nombres: [this.estudiante.nombres, Validators.required],
      apellidos: [this.estudiante.apellidos],
      correo: [this.estudiante.correo ,Validators.required],
    });
  }
  get f() { return this.registerForm.controls; }

  create() {
    this.estudiante = this.registerForm.value;

    this.estudianteService.post(this.estudiante).subscribe(c => {
        if (c != null) {
            const messageBox = this.modalService.open(AlertModalComponent)
            messageBox.componentInstance.title = "Resultado Operación";
            messageBox.componentInstance.message = 'SUCCESS!! :-)';
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
