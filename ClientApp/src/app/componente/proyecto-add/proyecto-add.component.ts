import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service'
import { ProyectoService } from 'src/app/services/proyecto.service'
import { Proyecto } from 'src/app/models/proyecto';
import { AsignaturaService } from 'src/app/services/asignatura.service'
import { Asignatura } from 'src/app/models/asignatura';
import { EstudianteService } from 'src/app/services/estudiante.service'
import { Estudiante } from 'src/app/models/estudiante';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/componente/alert-modal/alert-modal.component';
import { AuthService } from 'src/app/services/auth.service';
import { EstudianteListModalComponent } from 'src/app/componente/estudiante-list-modal/estudiante-list-modal.component';
import { AsignaturaListModalComponent } from 'src/app/componente/asignatura-list-modal/asignatura-list-modal.component';


@Component({
  selector: 'app-proyecto-add',
  templateUrl: './proyecto-add.component.html',
  styleUrls: ['./proyecto-add.component.css']
})
export class ProyectoAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(
    private asignaturaService: AsignaturaService,
    private proyectoService: ProyectoService,
    private estudianteService: EstudianteService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private authorizeService: AuthService
  ) { }
  proyecto: Proyecto;


  ngOnInit() {
    this.proyecto = new Proyecto();
    this.registerForm = this.formBuilder.group({
      codigo: [this.proyecto.codigo, [Validators.required, Validators.minLength(3)]],
      titulo: [this.proyecto.titulo, Validators.required],
      introduccion: [this.proyecto.introduccion, Validators.required],
      objetivos: [this.proyecto.objetivos, Validators.required],
      metodologia: [this.proyecto.metodologia, Validators.required],
      resultados: [this.proyecto.resultados, Validators.required],
      concluciones: [this.proyecto.concluciones, Validators.required],
      referencias: [this.proyecto.referencias, Validators.required],
      coddoc: [this.proyecto.coddoc = this.userName()],
      namedoc: [this.proyecto.namedoc = this.nameUser() + " " + this.ApellidoUser()],
      codasig: [this.proyecto.codasig, Validators.required],
      nameasig: [''],
      codalum1: [this.proyecto.codalum1, Validators.required],
      namealum1: [''],
      codalum2: [this.proyecto.codalum2],
      namealum2: [''],
      codalum3: [this.proyecto.codalum3],
      namealum3: [''],
      estado: [this.proyecto.estado = "Espera"]
    });
  }


  userName(): string {
    return this.authorizeService.getUserName();
  }

  rolUser(): string {
    return this.authorizeService.getRolUser();
  }

  nameUser(): string {
    return this.authorizeService.getName();
  }

  ApellidoUser(): string {
    return this.authorizeService.getApellido();
  }



  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  buscarAsignatura() {
    this.asignaturaService.get(this.registerForm.value.codasig).subscribe(asignatura => {
      if (asignatura != null) {
        this.f['codasig'].setValue(asignatura.id);
        this.f['nameasig'].setValue(asignatura.nombreAsignatura);
      }
      else {
        this.openModalAsignatura();
      }
    });
  }

  openModalAsignatura() {
    this.modalService.open(AsignaturaListModalComponent, { size: 'lg' }).result.then((asignatura) => this.actualizar(asignatura));
  }

  actualizar(asignatura: Asignatura) {

    this.registerForm.controls['codasig'].setValue(asignatura.id);
    this.registerForm.controls['nameasig'].setValue(asignatura.nombreAsignatura);
  }

  buscarEstudiante() {
    this.estudianteService.get(this.registerForm.value.codalum1).subscribe(estudiante => {
      if (estudiante != null) {
        this.f['codalum1'].setValue(estudiante.identificacion);
        this.f['namealum1'].setValue(estudiante.nombres + " " + estudiante.apellidos);
      }
      else {
        this.openModalEstudiante();
      }
    });
  }

  openModalEstudiante() {
    this.modalService.open(EstudianteListModalComponent, { size: 'lg' }).result.then((estudiante) => this.actualizarEstudiante(estudiante));
  }

  actualizarEstudiante(estudiante: Estudiante) {
    this.registerForm.controls['codalum1'].setValue(estudiante.identificacion);
    this.registerForm.controls['namealum1'].setValue(estudiante.nombres + " " + estudiante.apellidos);
  }


  buscarEstudiante2() {
    this.estudianteService.get(this.registerForm.value.codalum2).subscribe(estudiante => {
      if (estudiante != null) {
        this.f['codalum2'].setValue(estudiante.identificacion);
        this.f['namealum2'].setValue(estudiante.nombres + " " + estudiante.apellidos);
      }
      else {
        this.openModalEstudiante2();
      }
    });
  }

  openModalEstudiante2() {
    this.modalService.open(EstudianteListModalComponent, { size: 'lg' }).result.then((estudiante) => this.actualizarEstudiante2(estudiante));
  }

  actualizarEstudiante2(estudiante: Estudiante) {
    this.registerForm.controls['codalum2'].setValue(estudiante.identificacion);
    this.registerForm.controls['namealum2'].setValue(estudiante.nombres + " " + estudiante.apellidos);
  }


  buscarEstudiante3() {
    this.estudianteService.get(this.registerForm.value.codalum3).subscribe(estudiante => {
      if (estudiante != null) {
        this.f['codalum3'].setValue(estudiante.identificacion);
        this.f['namealum3'].setValue(estudiante.nombres + " " + estudiante.apellidos);
      }
      else {
        this.openModalEstudiante3();
      }
    });
  }

  openModalEstudiante3() {
    this.modalService.open(EstudianteListModalComponent, { size: 'lg' }).result.then((estudiante) => this.actualizarEstudiante3(estudiante));
  }

  actualizarEstudiante3(estudiante: Estudiante) {
    this.registerForm.controls['codalum3'].setValue(estudiante.identificacion);
    this.registerForm.controls['namealum3'].setValue(estudiante.nombres + " " + estudiante.apellidos);
  }





  //Manejo Registrar
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.create();
  }

  create() {
    this.proyecto = this.registerForm.value;

    this.proyectoService.post(this.proyecto).subscribe(c => {
      if (c != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'SUCCESS!! :-)';
      }
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
