import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Calificacion } from '../models/calificacion';
import { HandleErrorService } from './handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,private handleErrorService: HandleErrorService) { }

  
  post(calificacion: Calificacion): Observable<Calificacion> {
    return this.http.post<Calificacion>(this.baseUrl + 'api/calificacion', calificacion)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Calificacion>('Registrar Calificacion', null))
  );
}

  getAll(): Observable<Calificacion[]> {
    return this.http.get<Calificacion[]>(this.baseUrl + 'api/calificacion').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Calificacion[]>('getAll', []))
    );
  }


  get(id: string): Observable<Calificacion> {
    const url = `${this.baseUrl + 'api/calificacion'}/${id}`;
    return this.http.get<Calificacion>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Calificacion>('Calificacion Service', null))
    );
  }
  
  update(calificacion: Calificacion): Observable<any> {
    const url = `${this.baseUrl + 'api/calificacion'}/${calificacion.codigo}`;
    return this.http.put(url, calificacion, httpOptions).pipe(
      tap(_ => this.log(`se modificaron los datos del calificacion con id=${calificacion.codigo}`)),
      catchError(this.handleError<any>('calificacion'))
    );
  }


  delete(calificacion: Calificacion | string): Observable<Calificacion> {
    const id = typeof calificacion === 'string' ? calificacion : calificacion.codigo;
    const url = `${this.baseUrl + 'api/calificacion'}/${id}`;

    return this.http.delete<Calificacion>(url, httpOptions).pipe(
      tap(_ => this.log(`se eleminó el calificacion con id=${id}`)),
      catchError(this.handleError<Calificacion>('deleteCalificacion'))
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
