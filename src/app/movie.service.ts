import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient en lugar de _HttpClient
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '1345f0ab1d1f9fabf87214d1c8d0a178';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { } // Usa HttpClient aquí

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`)
      .pipe(
        tap(data => console.log('Datos de la API:', data)), // Esta línea imprime los datos de la API por consola
        catchError(error => {
          console.error('Ocurrió un error:', error);
          throw error; // Propaga el error para que pueda ser manejado por el componente que llama al servicio
        })
      );
  }
}
