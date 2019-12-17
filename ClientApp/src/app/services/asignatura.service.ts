import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Asignatura } from '../models/asignatura';
import { HandleErrorService } from './handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) {
  }


  post(asignatura: Asignatura): Observable<Asignatura> {
    return this.http.post<Asignatura>(this.baseUrl + 'api/asignatura', asignatura)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Asignatura>('Registrar Asignatura', null))
    );
  }


  getAll(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.baseUrl + 'api/asignatura').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Asignatura[]>('getAll', []))
    );
  }
 
  get(id: string): Observable<Asignatura> {
    const url = `${this.baseUrl + 'api/asignatura'}/${id}`;
    return this.http.get<Asignatura>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Asignatura>('Asignatura Service', null))
    );
  }
  update(asignatura: Asignatura): Observable<any> {
    const url = `${this.baseUrl + 'api/asignatura'}/${asignatura.id}`;
    return this.http.put(url, asignatura, httpOptions).pipe(
      tap(_ => this.log(`se modificaron los datos del asignatura con id=${asignatura.id}`)),
      catchError(this.handleError<any>('asignatura'))
    );
  }


  delete(asignatura: Asignatura | string): Observable<Asignatura> {
    const id = typeof asignatura === 'string' ? asignatura : asignatura.id;
    const url = `${this.baseUrl + 'api/asignatura'}/${id}`;

    return this.http.delete<Asignatura>(url, httpOptions).pipe(
      tap(_ => this.log(`se eleminó el asignatura con id=${id}`)),
      catchError(this.handleError<Asignatura>('deleteAsignatura'))
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


