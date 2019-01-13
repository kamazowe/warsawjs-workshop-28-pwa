import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Movie } from '../../interfaces/movie';

@Component({
    selector: 'app-page-home',
    templateUrl: './page-home.component.html',
})
export class PageHomeComponent implements OnInit {

    movies: Movie[];

    constructor(private movieService: MovieService) {
    }

    ngOnInit() {
        this.movies = this.movieService.getMovies();
    }

}
