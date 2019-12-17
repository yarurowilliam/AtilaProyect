import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service'
import { Proyecto } from 'src/app/models/proyecto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-proyecto-edit',
  templateUrl: './proyecto-edit.component.html',
  styleUrls: ['./proyecto-edit.component.css']
})
export class ProyectoEditComponent implements OnInit {
  proyecto: Proyecto;
  stask: string;
  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectoService,
    private location: Location) { }

  ngOnInit() {
    this.get();
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
  delete(): void {
    this.proyectoService.delete(this.proyecto)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}
