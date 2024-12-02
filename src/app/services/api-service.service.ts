import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
/*   private url: string = "https://cats-rtrx.onrender.com/random/img"; */
  private url: string = "http://localhost:3000/random/img";
  constructor(private http: HttpClient) { }


  getRandomImage(): Observable<any> {
    let header = new HttpHeaders();
    header.set('authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXJ2aWNlIjoiY2F0IiwiaWF0IjoxNzMyNDg0MTQwLCJleHAiOjE3MzMwODg5NDB9.46Z5QWbrVnnBotbnmo_V4aiQLb6T9sOsE9HXWh52aA0")
    

    return this.http.get(this.url, {
      headers: header
    }).pipe(
      catchError(this.errorHandler)
    )
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    let errorMessage = ''

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      errorMessage = `Erro na requisição: Código ${error.status}, ` +
        `Mensagem: ${error.message}`;
    }
    console.error(errorMessage)
    return throwError(() => new Error(errorMessage))
  }
}
