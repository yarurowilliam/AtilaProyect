import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { RubricaService } from 'src/app/services/rubrica.service'
import { Rubrica } from 'src/app/models/rubrica';

@Component({
  selector: 'app-rubrica-list',
  templateUrl: './rubrica-list.component.html',
  styleUrls: ['./rubrica-list.component.css']
})
export class RubricaListComponent implements OnInit {
  rubricas: Rubrica[];
  constructor(private rubricaService: RubricaService) { }
  @Output() seleccionado = new EventEmitter<Rubrica>();
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.rubricaService.getAll().subscribe(rubricas => this.rubricas = rubricas);
    console.log(JSON.stringify(this.rubricas))
  }
  seleccionar(rubrica: Rubrica) {
    this.seleccionado.emit(rubrica);
  }

}
