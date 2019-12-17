import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignaturaService } from 'src/app/services/asignatura.service'
import { Asignatura } from 'src/app/models/asignatura';
import { Location } from '@angular/common';


@Component({
  selector: 'app-asignatura-edit',
  templateUrl: './asignatura-edit.component.html',
  styleUrls: ['./asignatura-edit.component.css']
})
export class AsignaturaEditComponent implements OnInit {
  asignatura: Asignatura;
  stask: string;
  constructor(
    private route: ActivatedRoute,
    private asignaturaService: AsignaturaService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.asignaturaService.get(id)
      .subscribe(hero => this.asignatura = hero);
  }
  update(): void {
    this.asignaturaService.update(this.asignatura)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.asignaturaService.delete(this.asignatura)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }


}
