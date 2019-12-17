import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service'
import { Proyecto } from 'src/app/models/proyecto';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service';
import { RubricaService } from 'src/app/services/rubrica.service';
import { Docente } from 'src/app/models/docente';
import { Rubrica } from 'src/app/models/rubrica';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {DocenteCalificadorModalComponent} from 'src/app/componente/AdminControl/docente-calificador-modal/docente-calificador-modal.component';
import { RubricaListModalComponent } from 'src/app/componente/AdminControl/rubrica-list-modal/rubrica-list-modal.component';

@Component({
  selector: 'app-asignar-docente-calificador',
  templateUrl: './asignar-docente-calificador.component.html',
  styleUrls: ['./asignar-docente-calificador.component.css']
})
export class AsignarDocenteCalificadorComponent implements OnInit {
  proyecto : Proyecto;
  stask: string;
  registerForm: FormGroup;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectoService,
    private docenteService: DocenteService,
    private rubricaService: RubricaService,
    private location: Location,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.get();
    this.proyecto = new Proyecto();
    this.registerForm = this.formBuilder.group({
      idcalificador: [this.proyecto.idcalificador, Validators.required],
      namecalificador: [this.proyecto.namecalificador, Validators.required],
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

  /////////////////////////////////////////////////////////////////

  get f() { return this.registerForm.controls; }


  buscarDocente() {
    this.docenteService.get(this.registerForm.value.idcalificador).subscribe(docente => {
      if (docente != null) {
        this.f['idcalificador'].setValue(docente.identificacion);
        this.f['namecalificador'].setValue(docente.primerNombre + " "+ docente.primerApellido);
      }
      else {
        this.openModalDocente();
      }
    });
  }

  openModalDocente() {
    this.modalService.open(DocenteCalificadorModalComponent, { size: 'lg' }).result.then((docente) => this.actualizar(docente));
  }

  actualizar(docente: Docente) {

    this.registerForm.controls['idcalificador'].setValue(docente.identificacion);
    this.registerForm.controls['namecalificador'].setValue(docente.primerNombre + " "+ docente.primerApellido);
  }

  ///////


}
