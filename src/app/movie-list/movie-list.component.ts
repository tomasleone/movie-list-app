import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
  
})
export class MovieListComponent implements OnInit {
  popularMovies: any[];

  constructor(private movieService: MovieService) {
    this.popularMovies = [];
  }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.movieService.getPopularMovies()
      .subscribe(
        data => {
          console.log('Películas populares:', data.results); // Imprime los datos de las películas populares por consola
          this.popularMovies = data.results;
        },
        error => {
          console.error('Error al obtener películas populares:', error); // Manejo de errores
        }
      );
  }
}

