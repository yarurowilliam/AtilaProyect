import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service'
import { Convocatoria } from 'src/app/models/convocatoria';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/componente/alert-modal/alert-modal.component';
import { ConvocatoriaAddComponent } from 'src/app/componentes/convocatoria-add/convocatoria-add.component';

@Component({
  selector: 'app-convocatoria-list',
  templateUrl: './convocatoria-list.component.html',
  styleUrls: ['./convocatoria-list.component.css']
})
export class ConvocatoriaListComponent implements OnInit {
  convocatorias : Convocatoria[];
  constructor(private convocatoriaService: ConvocatoriaService,private authorizeService: AuthService,  private modalService: NgbModal) { }

  ngOnInit() {
    this.getAll();
  }

  
  getAll() {
    this.convocatoriaService.getAll().subscribe(convocatorias => this.convocatorias = convocatorias);
    console.log(JSON.stringify(this.convocatorias))
  }

  open(){
      this.modalService.open(ConvocatoriaAddComponent, { size: 'lg' });
  }

}
