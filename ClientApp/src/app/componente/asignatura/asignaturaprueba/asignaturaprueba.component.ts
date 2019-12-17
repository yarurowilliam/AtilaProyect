import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service'
import { Docente } from 'src/app/models/Docente';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MensajeModalComponent } from 'src/app/mensaje-modal/mensaje-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-asignaturaprueba',
  templateUrl: './asignaturaprueba.component.html',
  styleUrls: ['./asignaturaprueba.component.css']
})
export class AsignaturapruebaComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;

  constructor(private docenteService: DocenteService, private modalService: NgbModal, private formBuilder: FormBuilder) { }
  docente: Docente;

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      identificacion: ['', [Validators.required, Validators.minLength(3)]],
      primerApellido: ['', Validators.required],
      primerNombre: ['', Validators.required],
      telefono: ['', Validators.required]
    });
    this.docente = { identificacion: '', primerApellido: '', segundoApellido: '', primerNombre: '', segundoNombre: '', rol: '',correo: '', telefono: '',password: '' };
  }

  add() {
    this.docenteService.post(this.docente).subscribe();
  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    this.add();
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }

}
