import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service'
import { Estudiante } from 'src/app/models/estudiante';
import { Location } from '@angular/common';

@Component({
  selector: 'app-estudiante-edit',
  templateUrl: './estudiante-edit.component.html',
  styleUrls: ['./estudiante-edit.component.css']
})
export class EstudianteEditComponent implements OnInit {
  estudiante: Estudiante;
  stask: string;
  constructor(
    private route: ActivatedRoute,
    private estudianteService: EstudianteService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.estudianteService.get(id)
      .subscribe(hero => this.estudiante = hero);
  }
  update(): void {
    this.estudianteService.update(this.estudiante)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.estudianteService.delete(this.estudiante)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}
