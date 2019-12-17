import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service'
import { Proyecto } from 'src/app/models/proyecto';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service'
import { Docente } from 'src/app/models/docente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ConsultarDocenteModalComponent} from 'src/app/componente/AdminControl/consultar-docente-modal/consultar-docente-modal.component';

@Component({
  selector: 'app-asignar-docente',
  templateUrl: './asignar-docente.component.html',
  styleUrls: ['./asignar-docente.component.css']
})
export class AsignarDocenteComponent implements OnInit {
  proyecto : Proyecto;
  stask: string;
  registerForm: FormGroup;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectoService,
    private docenteService: DocenteService,
    private location: Location,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.get();
    this.proyecto = new Proyecto();
    this.registerForm = this.formBuilder.group({
      coddocrev: [this.proyecto.coddocrev, Validators.required],
      namedocrev: [this.proyecto.namedocrev, Validators.required],
    });
  }

  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.proyectoService.get(id)
      .subscribe(hero => this.proyecto = hero);
  }
  update(): void {
    this.proyectoService.update(this.proyecto)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

    /////////////////////////////////////////////////////

    get f() { return this.registerForm.controls; }

    buscarAsignatura() {
      this.docenteService.get(this.registerForm.value.coddocrev).subscribe(docente => {
        if (docente != null) {
          this.f['coddocrev'].setValue(docente.identificacion);
          this.f['namedocrev'].setValue(docente.primerNombre + " "+ docente.primerApellido);
        }
        else {
          this.openModalDocente();
        }
      });
    }
  
    openModalDocente() {
      this.modalService.open(ConsultarDocenteModalComponent, { size: 'lg' }).result.then((docente) => this.actualizar(docente));
    }
  
    actualizar(docente: Docente) {
  
      this.registerForm.controls['coddocrev'].setValue(docente.identificacion);
      this.registerForm.controls['namedocrev'].setValue(docente.primerNombre + " "+ docente.primerApellido);
    }





}
