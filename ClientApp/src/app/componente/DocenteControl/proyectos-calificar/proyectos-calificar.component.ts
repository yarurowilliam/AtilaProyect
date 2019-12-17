import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service'
import { Proyecto } from 'src/app/models/proyecto';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/componente/alert-modal/alert-modal.component';
import { ProyectoListModalComponent } from 'src/app/componente/proyecto-list-modal/proyecto-list-modal.component';



@Component({
  selector: 'app-proyectos-calificar',
  templateUrl: './proyectos-calificar.component.html',
  styleUrls: ['./proyectos-calificar.component.css']
})
export class ProyectosCalificarComponent implements OnInit {
  searchText: string;
  proyectos: Proyecto[];
  constructor(private proyectosService: ProyectoService,private authorizeService: AuthService,  private modalService: NgbModal) { }

  ngOnInit() {
    this.getAll();
    this.searchText=this.userName();
  }

  
  getAll() {
    this.proyectosService.getAll().subscribe(proyectos => this.proyectos = proyectos);
    console.log(JSON.stringify(this.proyectos))
  }


  userName(): string {
    return this.authorizeService.getUserName();
  }

  rolUser(): string {
    return this.authorizeService.getRolUser();
  }

  nameUser(): string {
    return this.authorizeService.getName();
  }

  ApellidoUser(): string {
    return this.authorizeService.getApellido();
  }

}
