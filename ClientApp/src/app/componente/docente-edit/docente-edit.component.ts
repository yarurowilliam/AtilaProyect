import { ActivatedRoute } from '@angular/router';
import { DocenteService } from 'src/app/services/docente.service'
import { Docente } from 'src/app/models/docente';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docente-edit',
  templateUrl: './docente-edit.component.html',
  styleUrls: ['./docente-edit.component.css']
})
export class DocenteEditComponent implements OnInit {
  docente: Docente;
  stask: string;
  constructor(
    private route: ActivatedRoute,
    private docenteService: DocenteService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }


  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.docenteService.get(id)
      .subscribe(hero => this.docente = hero);
  }
  update(): void {
    this.docenteService.update(this.docente)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.docenteService.delete(this.docente)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
  
}
