import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AsignaturaAddComponent } from 'src/app/componente/asignatura-add/asignatura-add.component';
import { AsignaturaListComponent } from 'src/app/componente/asignatura-list/asignatura-list.component';
import { AsignaturaEditComponent } from 'src/app/componente/asignatura-edit/asignatura-edit.component';
import { DocenteEditComponent } from 'src/app/componente/docente-edit/docente-edit.component';
import { DocenteAddComponent } from 'src/app/componente/docente-add/docente-add.component';
import { DocenteListComponent } from 'src/app/componente/docente-list/docente-list.component';
import { HomeComponent } from 'src/app/home/home.component';
import { MensajeModalComponent } from './mensaje-modal/mensaje-modal.component';
import {AsignaturapruebaComponent} from 'src/app/componente/asignatura/asignaturaprueba/asignaturaprueba.component';
import {LoginComponent} from '././componentes/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RubricaAddComponent } from '././componente/rubrica-add/rubrica-add.component';
import { RubricaListComponent } from '././componente/rubrica-list/rubrica-list.component';
import { RubricaEditComponent } from '././componente/rubrica-edit/rubrica-edit.component';
import { EstudianteAddComponent } from '././componente/estudiante-add/estudiante-add.component';
import { EstudianteListComponent } from '././componente/estudiante-list/estudiante-list.component';
import { EstudianteEditComponent } from '././componente/estudiante-edit/estudiante-edit.component';
import { ProyectoAddComponent } from '././componente/proyecto-add/proyecto-add.component';
import { ProyectoListComponent } from '././componente/proyecto-list/proyecto-list.component';
import { ProyectoEditComponent } from '././componente/proyecto-edit/proyecto-edit.component';
import { AsignarDocenteComponent } from '././componente/AdminControl/asignar-docente/asignar-docente.component';
import { CargoDocenteComponent } from '././componente/AdminControl/cargo-docente/cargo-docente.component';
import { ConsultarProyectoComponent } from '././componente/AdminControl/consultar-proyecto/consultar-proyecto.component';
import { ConsultarDocenteComponent } from '././componente/AdminControl/consultar-docente/consultar-docente.component';
import {ProyectosRevisarComponent} from '././componente/DocenteControl/proyectos-revisar/proyectos-revisar.component';
import {RevisarProyectoComponent} from '././componente/DocenteControl/revisar-proyecto/revisar-proyecto.component';
import { ConvocatoriaAddComponent } from './componentes/convocatoria-add/convocatoria-add.component';
import { ConvocatoriaListComponent} from './componentes/convocatoria-list/convocatoria-list.component';
import { ProyectoAceptadoComponent } from '././componente/AdminControl/proyecto-aceptado/proyecto-aceptado.component';
import { DocenteCalificadorComponent } from '././componente/AdminControl/docente-calificador/docente-calificador.component';
import { AsignarDocenteCalificadorComponent } from '././componente/AdminControl/asignar-docente-calificador/asignar-docente-calificador.component';
import {ProyectosCalificarComponent} from '././componente/DocenteControl/proyectos-calificar/proyectos-calificar.component';
import {CalificarProyectoComponent} from '././componente/DocenteControl/calificar-proyecto/calificar-proyecto.component';



const routes: Routes = [
  {path:'',redirectTo:'/logear',pathMatch:'full'},
  {
    path:'mensaje',
    component:MensajeModalComponent
  },
  {
    path:'logear',
    component:LoginComponent
  },
  {
    path: 'proyectoaceptado',
    component: ProyectoAceptadoComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'consultarcalificador',
    component: DocenteCalificadorComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'asignarcalificador/:id',
    component: AsignarDocenteCalificadorComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'proyectoscalificacion',
    component: ProyectosCalificarComponent,canActivate:[AuthGuard]
  },
  {
    path: 'calificarproyecto/:id',
    component: CalificarProyectoComponent,canActivate:[AuthGuard]
  },
  {
    path: 'proyectosrevision',
    component: ProyectosRevisarComponent,canActivate:[AuthGuard]
  },
  {
    path: 'revisarproyecto/:id',
    component: RevisarProyectoComponent,canActivate:[AuthGuard]
  },
  {
    path: 'convocatoriaadd',
    component: ConvocatoriaAddComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'convocatorialist',
    component: ConvocatoriaListComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'consultardocente',
    component: ConsultarDocenteComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'consultarproyecto',
    component: ConsultarProyectoComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'cargodocente/:id',
    component: CargoDocenteComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'asignardocente/:id',
    component: AsignarDocenteComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'proyectoadd',
    component: ProyectoAddComponent,canActivate:[AuthGuard]
  },
  {
    path: 'misproyectos',
    component: ProyectoListComponent,canActivate:[AuthGuard]
  },
  {
    path: 'proyectoedit/:id',
    component: ProyectoEditComponent,canActivate:[AuthGuard]
  },  
  {
    path: 'asignaturalist',
    component: AsignaturaListComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'asignaturaadd',
    component: AsignaturaAddComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'asignaturaedit/:id',
    component: AsignaturaEditComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },  
  {
    path: 'rubricalist',
    component: RubricaListComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'rubricaadd',
    component: RubricaAddComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'rubricaedit/:id',
    component: RubricaEditComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'docentelist',
    component: DocenteListComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'docenteadd',
    component: DocenteAddComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'docenteedit/:id',
    component: DocenteEditComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path: 'estudiantelist',
    component: EstudianteListComponent,canActivate:[AuthGuard]
  },
  {
    path: 'estudianteadd',
    component: EstudianteAddComponent,canActivate:[AuthGuard]
  },
  {
    path: 'estudianteedit/:id',
    component: EstudianteEditComponent,canActivate:[AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,canActivate:[AuthGuard]
  },
  {
    path: 'prueba',
    component: AsignaturapruebaComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
