import { Component, OnInit } from '@angular/core';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service'
import { Convocatoria } from 'src/app/models/convocatoria';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/componente/alert-modal/alert-modal.component';


@Component({
  selector: 'app-convocatoria-add',
  templateUrl: './convocatoria-add.component.html',
  styleUrls: ['./convocatoria-add.component.css']
})
export class ConvocatoriaAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private convocatoriaService: ConvocatoriaService, private modalService: NgbModal, private formBuilder: FormBuilder) { }
  convocatoria:Convocatoria;
  ngOnInit() {
    this.convocatoria = new Convocatoria();
    this.registerForm = this.formBuilder.group({
      periodo: [this.convocatoria.periodo, Validators.required],
      fechaInicio: [this.convocatoria.fechaInicio, Validators.required],
      fechaFin: [this.convocatoria.fechaFin, Validators.required],
    });
  }

  get f() { return this.registerForm.controls; }


  create() {
    this.convocatoria = this.registerForm.value;

    this.convocatoriaService.post(this.convocatoria).subscribe(c => {
        if (c != null) {
            const messageBox = this.modalService.open(AlertModalComponent)
            messageBox.componentInstance.title = "Resultado Operación";
            messageBox.componentInstance.message = 'Se agrego correctamente la convocatoria!!';
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
