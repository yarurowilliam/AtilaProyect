import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Estudiante } from '../models/estudiante';
import { HandleErrorService } from './handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) { }

  post(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.baseUrl + 'api/estudiante', estudiante)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Estudiante>('Registrar Estudiante', null))
      );
  }

  getAll(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.baseUrl + 'api/estudiante').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Estudiante[]>('getAll', []))
    );
  }

  get(id: string): Observable<Estudiante> {
    const url = `${this.baseUrl + 'api/estudiante'}/${id}`;
    return this.http.get<Estudiante>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Estudiante>('Estudiante Service', null))
    );
  }

  update(estudiante: Estudiante): Observable<any> {
    const url = `${this.baseUrl + 'api/estudiante'}/${estudiante.identificacion}`;
    return this.http.put(url, estudiante, httpOptions).pipe(
      tap(_ => this.log(`se modificaron los datos del docente con id=${estudiante.identificacion}`)),
      catchError(this.handleError<any>('docente'))
    );
  }

  delete(estudiante: Estudiante | string): Observable<Estudiante> {
    const id = typeof estudiante === 'string' ? estudiante : estudiante.identificacion;
    const url = `${this.baseUrl + 'api/estudiante'}/${id}`;

    return this.http.delete<Estudiante>(url, httpOptions).pipe(
      tap(_ => this.log(`se eleminó el estudiante con id=${id}`)),
      catchError(this.handleError<Estudiante>('deleteEstudiante'))
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
