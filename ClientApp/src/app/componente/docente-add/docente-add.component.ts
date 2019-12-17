import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service'
import { Docente } from 'src/app/models/docente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/componente/alert-modal/alert-modal.component';


@Component({
  selector: 'app-docente-add',
  templateUrl: './docente-add.component.html',
  styleUrls: ['./docente-add.component.css']
})
export class DocenteAddComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private docenteService: DocenteService, private modalService: NgbModal, private formBuilder: FormBuilder) { }
  docente: Docente;

  ngOnInit() {
    this.docente = new Docente();  
    this.registerForm = this.formBuilder.group({
      identificacion: [this.docente.identificacion, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
      primerApellido: [this.docente.primerApellido, Validators.required],
      segundoApellido: [this.docente.segundoApellido],
      primerNombre: [this.docente.primerNombre, Validators.required],
      segundoNombre: [this.docente.segundoNombre],
      rol:[this.docente.rol, Validators.required],
      telefono: [this.docente.telefono, Validators.required],
      correo: [this.docente.correo ,Validators.required],
      password: [this.docente.password = "UNICESAR2019"]
    });
  }
/*
  add() {
    if(this.docente.identificacion==''){
      var mesage =this.modalService.open(MensajeModalComponent);
      mesage.componentInstance.titulo="Atencion";
      mesage.componentInstance.body="Rellene los campos";
    }else{
      this.docenteService.addDocente(this.docente)
      .subscribe();
      var mesage =this.modalService.open(MensajeModalComponent);
      mesage.componentInstance.titulo="Atencion";
      mesage.componentInstance.body="Se agrego un Docente";
    }
  }*/

  get f() { return this.registerForm.controls; }


  create() {
    this.docente = this.registerForm.value;

    this.docenteService.post(this.docente).subscribe(c => {
        if (c != null) {
            const messageBox = this.modalService.open(AlertModalComponent)
            messageBox.componentInstance.title = "Resultado Operación";
            messageBox.componentInstance.message = 'Se agrego correctamente el docente!!';
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
