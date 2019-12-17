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
  selector: 'app-calificar-proyecto',
  templateUrl: './calificar-proyecto.component.html',
  styleUrls: ['./calificar-proyecto.component.css']
})
export class CalificarProyectoComponent implements OnInit {
  proyecto : Proyecto;
  stask: string;
  registerForm: FormGroup;
  submitted = false;
  rubrica:Rubrica;
  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectoService,
    private docenteService: DocenteService,
    private rubricaService: RubricaService,
    private location: Location,
    private modalService: NgbModal,
    private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.get();
      this.proyecto = new Proyecto();
      this.registerForm = this.formBuilder.group({
        rubricacodigo: [this.proyecto.rubricacodigo, Validators.required],
        rubricanombre: [this.proyecto.rubricanombre, Validators.required],
      });
    }


    calcularPromedio() {
      this.proyecto.promedio= (this.proyecto.item_1+this.proyecto.item_2+
      this.proyecto.item_3+this.proyecto.item_4+this.proyecto.item_5+this.proyecto.item_6+
      this.proyecto.item_7+this.proyecto.item_8+this.proyecto.item_9+this.proyecto.item_10+
      this.proyecto.item_11+this.proyecto.item_12+this.proyecto.item_13+this.proyecto.item_14+
      this.proyecto.item_15+this.proyecto.item_16+this.proyecto.item_17+this.proyecto.item_18+
      this.proyecto.item_19)/19;
      this.proyecto.estado="Calificado";
    }

    getRubrica(): void {
      const id =
        this.route.snapshot.paramMap.get('id');
      this.rubricaService.get(this.proyecto.rubricacodigo)
        .subscribe(hero => this.rubrica = hero);
    }

    get(): void {
      const id =
        this.route.snapshot.paramMap.get('id');
      this.proyectoService.get(id)
        .subscribe(hero => this.proyecto = hero);
    }
    update(): void {
      this.calcularPromedio();
      this.proyectoService.update(this.proyecto)
        .subscribe(() => this.goBack());
    }
    goBack(): void {
      this.location.back();
    }

    //////////////////////////////////////////////////
    get f() { return this.registerForm.controls; }

    buscarRubrica() {
      this.rubricaService.get(this.registerForm.value.rubricacodigo).subscribe(rubrica => {
        if (rubrica != null) {
          this.f['rubricacodigo'].setValue(rubrica.codigo);
          this.f['rubricanombre'].setValue(rubrica.titulo);
        }
        else {
          this.openModalRubrica();
        }
      });
    }
  
    openModalRubrica() {
      this.modalService.open(RubricaListModalComponent, { size: 'lg' }).result.then((rubrica) => this.actualizarRubrica(rubrica));
    }
  
    actualizarRubrica(rubrica: Rubrica) {
  
      this.registerForm.controls['rubricacodigo'].setValue(rubrica.codigo);
      this.registerForm.controls['rubricanombre'].setValue(rubrica.titulo);
    }
}
