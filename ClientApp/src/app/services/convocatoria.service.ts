import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Convocatoria } from '../models/convocatoria';
import { HandleErrorService } from './handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,private handleErrorService: HandleErrorService) { }


  
  post(convocatoria: Convocatoria): Observable<Convocatoria> {
    return this.http.post<Convocatoria>(this.baseUrl + 'api/convocatoria', convocatoria)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Convocatoria>('Registrar Convocatoria', null))
  );
}

  getAll(): Observable<Convocatoria[]> {
    return this.http.get<Convocatoria[]>(this.baseUrl + 'api/convocatoria').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Convocatoria[]>('getAll', []))
    );
  }

  get(id: string): Observable<Convocatoria> {
    const url = `${this.baseUrl + 'api/convocatoria'}/${id}`;
    return this.http.get<Convocatoria>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Convocatoria>('Convocatoria Service', null))
    );
  }
  
  update(convocatoria: Convocatoria): Observable<any> {
    const url = `${this.baseUrl + 'api/convocatoria'}/${convocatoria.periodo}`;
    return this.http.put(url, convocatoria, httpOptions).pipe(
      tap(_ => this.log(`se modificaron los datos del convocatoria con id=${convocatoria.periodo}`)),
      catchError(this.handleError<any>('convocatoria'))
    );
  }


  delete(convocatoria: Convocatoria | string): Observable<Convocatoria> {
    const id = typeof convocatoria === 'string' ? convocatoria : convocatoria.periodo;
    const url = `${this.baseUrl + 'api/convocatoria'}/${id}`;

    return this.http.delete<Convocatoria>(url, httpOptions).pipe(
      tap(_ => this.log(`se eleminó la convocatoria con id=${id}`)),
      catchError(this.handleError<Convocatoria>('deleteConvocatoria'))
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
