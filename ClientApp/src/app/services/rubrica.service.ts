import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Rubrica } from '../models/rubrica';
import { HandleErrorService } from './handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,private handleErrorService: HandleErrorService) { }

  
  post(rubrica: Rubrica): Observable<Rubrica> {
    return this.http.post<Rubrica>(this.baseUrl + 'api/rubrica', rubrica)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Rubrica>('Registrar Rubrica', null))
  );
}

  getAll(): Observable<Rubrica[]> {
    return this.http.get<Rubrica[]>(this.baseUrl + 'api/rubrica').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Rubrica[]>('getAll', []))
    );
  }


  get(id: string): Observable<Rubrica> {
    const url = `${this.baseUrl + 'api/rubrica'}/${id}`;
    return this.http.get<Rubrica>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Rubrica>('Rubrica Service', null))
    );
  }
  
  update(rubrica: Rubrica): Observable<any> {
    const url = `${this.baseUrl + 'api/rubrica'}/${rubrica.codigo}`;
    return this.http.put(url, rubrica, httpOptions).pipe(
      tap(_ => this.log(`se modificaron los datos del codigo con id=${rubrica.codigo}`)),
      catchError(this.handleError<any>('rubrica'))
    );
  }


  delete(rubrica: Rubrica | string): Observable<Rubrica> {
    const id = typeof rubrica === 'string' ? rubrica : rubrica.codigo;
    const url = `${this.baseUrl + 'api/rubrica'}/${id}`;

    return this.http.delete<Rubrica>(url, httpOptions).pipe(
      tap(_ => this.log(`se eleminó el rubrica con id=${id}`)),
      catchError(this.handleError<Rubrica>('deleteRubrica'))
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
