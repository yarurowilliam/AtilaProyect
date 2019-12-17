import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Proyecto } from '../models/proyecto';
import { HandleErrorService } from './handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) {
  }

  post(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.baseUrl + 'api/proyecto', proyecto)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Proyecto>('Registrar Proyecto', null))
      );
  }

  getAll(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.baseUrl + 'api/proyecto').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Proyecto[]>('getAll', []))
    );
  }

  get(id: string): Observable<Proyecto> {
    const url = `${this.baseUrl + 'api/proyecto'}/${id}`;
    return this.http.get<Proyecto>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Proyecto>('Cuenta Service', null))
    );
  }

  update(proyecto: Proyecto): Observable<any> {
    const url = `${this.baseUrl + 'api/proyecto'}/${proyecto.codigo}`;
    return this.http.put(url, proyecto, httpOptions).pipe(
      tap(_ => this.log(`Proyecto Modificado con id=${proyecto.codigo}`)),
      catchError(this.handleError<any>('docente'))
    );
  }


  delete(proyecto: Proyecto | string): Observable<Proyecto> {
    const id = typeof proyecto === 'string' ? proyecto : proyecto.codigo;
    const url = `${this.baseUrl + 'api/proyecto'}/${id}`;

    return this.http.delete<Proyecto>(url, httpOptions).pipe(
      tap(_ => this.log(`se eleminó el proyecto con id=${id}`)),
      catchError(this.handleError<Proyecto>('deleteProyecto'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {

    alert(message);
  }


}
