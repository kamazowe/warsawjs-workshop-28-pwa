import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Movie } from '../../interfaces/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page-movie-profile',
    templateUrl: './page-movie-profile.component.html',
})
export class PageMovieProfileComponent implements OnInit {

    movie: Movie;

    constructor(private activatedRouter: ActivatedRoute,
                private movieService: MovieService) {
    }

    ngOnInit() {
        const id = this.activatedRouter.snapshot.params['id'];
        this.movie = this.movieService.getMovieById(id);
    }

}
