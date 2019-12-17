import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from 'src/app/models/docente'
import { Observable } from 'rxjs';
import { HandleErrorService } from 'src/app/services/handle-error.service';
import { HttpClient } from '@angular/common/http';
import { Rol } from 'src/app/models/rol';
import { tap, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string;
  constructor(private _router: Router,private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleErrorService) { 
      this.baseUrl = baseUrl;
    }


  docente : Docente;

  login(user: string,nombre: string,apellido: string, password: string, rol:string) {
    sessionStorage.setItem('user', user);
    sessionStorage.setItem('nombre', nombre);
    sessionStorage.setItem('apellido', apellido);
    sessionStorage.setItem('roles', rol);
  }

  logout() {
    sessionStorage.clear();
    //this._router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('user')!=null;
  }

  hasRole(rol: string): boolean {
    let roles: string[]
    if (!this.isAuthenticated()) return false;
    if(sessionStorage.getItem('roles')=="Administrador"){
      roles =["Administrador"];
      return roles.indexOf(rol) >= 0;
    }else{
      if(sessionStorage.getItem('roles')=="Docente"){
        roles = ["Docente"];
        return roles.indexOf(rol) >= 0;
      }else{
        if(sessionStorage.getItem('roles')=="Revisador"){
          roles = ["Revisador"];
          return roles.indexOf(rol) >= 0;
        }else{
          if(sessionStorage.getItem('roles')=="Calificador"){
            roles = ["Calificador"];
            return roles.indexOf(rol) >= 0;
          }
        }
      }

    }
    
    
  }

  getUserName(): string {
    return sessionStorage.getItem('user') != null ? sessionStorage.getItem('user'):'Anonimo';
  }

  getName(): string {
    return sessionStorage.getItem('nombre') != null ? sessionStorage.getItem('nombre'):'Anonimo';
  }

  getApellido(): string {
    return sessionStorage.getItem('apellido') != null ? sessionStorage.getItem('apellido'):'Anonimo';
  }

  getRolUser(): string {
    return sessionStorage.getItem('roles') != null ? sessionStorage.getItem('roles'):'Anonimo';
  }

  get(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.baseUrl + 'api/Rol')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Rol[]>('Consulta de Roles', null))
        );
}

  getByRol(nombrerol:string): Observable<Rol> {
    return this.http.get<Rol>(this.baseUrl + 'api/Rol/' + nombrerol)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Rol>('Consulta de Roles', null))
    );
  }
  

}
