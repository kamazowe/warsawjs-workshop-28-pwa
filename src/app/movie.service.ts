import { Injectable } from '@angular/core';
import { Movie } from './interfaces/movie';

import MOVIES from './movies.json';

@Injectable({
    providedIn: 'root',
})
export class MovieService {

    movies: Movie[] = [];

    constructor() {
        this.movies = MOVIES;
    }

    getMovies(): Movie[] {
        return this.movies;
    }

    getMovieById(id: string): Movie {
        const movieItem = this.movies.find((movie: Movie) => {
            return movie.id === id;
        });
        return movieItem;
    }
}