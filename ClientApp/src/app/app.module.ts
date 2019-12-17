import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AsignaturaAddComponent } from './componente/asignatura-add/asignatura-add.component';
import { AsignaturaListComponent } from './componente/asignatura-list/asignatura-list.component';
import { AsignaturaEditComponent } from './componente/asignatura-edit/asignatura-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { DocenteAddComponent } from './componente/docente-add/docente-add.component';
import { DocenteListComponent } from './componente/docente-list/docente-list.component';
import { DocenteEditComponent } from './componente/docente-edit/docente-edit.component';
import { MensajeModalComponent } from './mensaje-modal/mensaje-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AsignaturapruebaComponent } from './componente/asignatura/asignaturaprueba/asignaturaprueba.component';
import { AlertModalComponent } from './componente/alert-modal/alert-modal.component';
import { LoginComponent } from './componentes/login/login.component';
import { RubricaAddComponent } from './componente/rubrica-add/rubrica-add.component';
import { RubricaListComponent } from './componente/rubrica-list/rubrica-list.component';
import { RubricaEditComponent } from './componente/rubrica-edit/rubrica-edit.component';
import { EstudianteAddComponent } from './componente/estudiante-add/estudiante-add.component';
import { EstudianteListComponent } from './componente/estudiante-list/estudiante-list.component';
import { EstudianteEditComponent } from './componente/estudiante-edit/estudiante-edit.component';
import { ProyectoAddComponent } from './componente/proyecto-add/proyecto-add.component';
import { ProyectoListComponent } from './componente/proyecto-list/proyecto-list.component';
import { ProyectoEditComponent } from './componente/proyecto-edit/proyecto-edit.component';
import { FiltroAsignaturaPipe } from './pipe/filtro-asignatura.pipe';
import { FiltroDocentePipe } from './pipe/filtro-docente.pipe';
import { FiltroEstudiantePipe } from './pipe/filtro-estudiante.pipe';
import { EstudianteListModalComponent } from './componente/estudiante-list-modal/estudiante-list-modal.component';
import { AsignaturaListModalComponent } from './componente/asignatura-list-modal/asignatura-list-modal.component';
import { FiltroMisProyectosPipe } from './pipe/filtro-mis-proyectos.pipe';
import { ProyectoListModalComponent } from './componente/proyecto-list-modal/proyecto-list-modal.component';
import { AsignarDocenteComponent } from './componente/AdminControl/asignar-docente/asignar-docente.component';
import { CargoDocenteComponent } from './componente/AdminControl/cargo-docente/cargo-docente.component';
import { ConsultarProyectoComponent } from './componente/AdminControl/consultar-proyecto/consultar-proyecto.component';
import { ConsultarDocenteComponent } from './componente/AdminControl/consultar-docente/consultar-docente.component';
import { FiltroConsultaProyectoPipe } from './pipe/AdminControl/filtro-consulta-proyecto.pipe';
import { ConsultarProyectoModalComponent } from './componente/AdminControl/consultar-proyecto-modal/consultar-proyecto-modal.component';
import { ConsultarDocenteModalComponent } from './componente/AdminControl/consultar-docente-modal/consultar-docente-modal.component';
import { FiltroConsultaDocentePipe } from './pipe/AdminControl/filtro-consulta-docente.pipe';
import { ProyectosRevisarComponent } from './componente/DocenteControl/proyectos-revisar/proyectos-revisar.component';
import { FiltroProyectoRevisionPipe } from './pipe/DocenteControl/filtro-proyecto-revision.pipe';
import { RevisarProyectoComponent } from './componente/DocenteControl/revisar-proyecto/revisar-proyecto.component';
import { ConvocatoriaAddComponent } from './componentes/convocatoria-add/convocatoria-add.component';
import { ConvocatoriaListComponent } from './componentes/convocatoria-list/convocatoria-list.component';
import { ProyectoAceptadoComponent } from './componente/AdminControl/proyecto-aceptado/proyecto-aceptado.component';
import { DocenteCalificadorComponent } from './componente/AdminControl/docente-calificador/docente-calificador.component';
import { FiltroConsultaAceptadoPipe } from './pipe/AdminControl/filtro-consulta-aceptado.pipe';
import { FiltroDocenteCalificadorPipe } from './pipe/AdminControl/filtro-docente-calificador.pipe';
import { AsignarDocenteCalificadorComponent } from './componente/AdminControl/asignar-docente-calificador/asignar-docente-calificador.component';
import { AgregarCalificacionComponent } from './componente/AdminControl/agregar-calificacion/agregar-calificacion.component';
import { DocenteCalificadorModalComponent } from './componente/AdminControl/docente-calificador-modal/docente-calificador-modal.component';
import { RubricaListModalComponent } from './componente/AdminControl/rubrica-list-modal/rubrica-list-modal.component';
import { CalificarProyectoComponent } from './componente/DocenteControl/calificar-proyecto/calificar-proyecto.component';
import { ProyectosCalificarComponent } from './componente/DocenteControl/proyectos-calificar/proyectos-calificar.component';
import { FiltroProyectoCalificacionPipe } from './pipe/DocenteControl/filtro-proyecto-calificacion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AsignaturaAddComponent,
    AsignaturaListComponent,
    AsignaturaEditComponent,
    DocenteAddComponent,
    DocenteListComponent,
    DocenteEditComponent,
    MensajeModalComponent,
    AsignaturapruebaComponent,
    AlertModalComponent,
    LoginComponent,
    RubricaAddComponent,
    RubricaListComponent,
    RubricaEditComponent,
    EstudianteAddComponent,
    EstudianteListComponent,
    EstudianteEditComponent,
    ProyectoAddComponent,
    ProyectoListComponent,
    ProyectoEditComponent,
    FiltroAsignaturaPipe,
    FiltroDocentePipe,
    FiltroEstudiantePipe,
    EstudianteListModalComponent,
    AsignaturaListModalComponent,
    FiltroMisProyectosPipe,
    ProyectoListModalComponent,
    AsignarDocenteComponent,
    CargoDocenteComponent,
    ConsultarProyectoComponent,
    ConsultarDocenteComponent,
    FiltroConsultaProyectoPipe,
    ConsultarProyectoModalComponent,
    ConsultarDocenteModalComponent,
    FiltroConsultaDocentePipe,
    ProyectosRevisarComponent,
    FiltroProyectoRevisionPipe,
    RevisarProyectoComponent,
    ConvocatoriaAddComponent,
    ConvocatoriaListComponent,
    ProyectoAceptadoComponent,
    DocenteCalificadorComponent,
    FiltroConsultaAceptadoPipe,
    FiltroDocenteCalificadorPipe,
    AsignarDocenteCalificadorComponent,
    AgregarCalificacionComponent,
    DocenteCalificadorModalComponent,
    RubricaListModalComponent,
    CalificarProyectoComponent,
    ProyectosCalificarComponent,
    FiltroProyectoCalificacionPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    HttpClientModule,/*
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    ),*/
    AppRoutingModule,
  ],
  entryComponents:[
    AlertModalComponent,
    EstudianteListModalComponent,
    AsignaturaListModalComponent,
    ProyectoListModalComponent,
    ConsultarProyectoModalComponent,
    ConsultarDocenteModalComponent,
    ConvocatoriaAddComponent,
    RubricaListModalComponent,
    DocenteCalificadorModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
