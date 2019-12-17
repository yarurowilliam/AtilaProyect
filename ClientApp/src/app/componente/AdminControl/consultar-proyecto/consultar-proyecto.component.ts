import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service'
import { Proyecto } from 'src/app/models/proyecto';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/componente/alert-modal/alert-modal.component';
import { ProyectoListModalComponent } from 'src/app/componente/proyecto-list-modal/proyecto-list-modal.component';


@Component({
  selector: 'app-consultar-proyecto',
  templateUrl: './consultar-proyecto.component.html',
  styleUrls: ['./consultar-proyecto.component.css']
})
export class ConsultarProyectoComponent implements OnInit {
  searchText: string;
  proyectos: Proyecto[];
  @Output() seleccionado = new EventEmitter<Proyecto>();
  constructor(private proyectosService: ProyectoService,private authorizeService: AuthService,  private modalService: NgbModal) { }

  ngOnInit() {
    this.getAll();
    this.searchText="Espera";
  }
  getAll() {
    this.proyectosService.getAll().subscribe(proyectos => this.proyectos = proyectos);
    console.log(JSON.stringify(this.proyectos))
  }

  seleccionar(proyecto: Proyecto) {
    this.seleccionado.emit(proyecto);
  }

}
