import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RubricaService } from 'src/app/services/rubrica.service'
import { Rubrica } from 'src/app/models/rubrica';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rubrica-edit',
  templateUrl: './rubrica-edit.component.html',
  styleUrls: ['./rubrica-edit.component.css']
})
export class RubricaEditComponent implements OnInit {
  rubrica: Rubrica;
  stask: string;
  constructor(
    private route: ActivatedRoute,
    private rubricaService: RubricaService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.rubricaService.get(id)
      .subscribe(hero => this.rubrica = hero);
  }
  update(): void {
    this.rubricaService.update(this.rubrica)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.rubricaService.delete(this.rubrica)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}
