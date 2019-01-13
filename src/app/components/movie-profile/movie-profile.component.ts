import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
    selector: 'app-movie-profile',
    templateUrl: './movie-profile.component.html',
})
export class MovieProfileComponent {

    @Input() movie: Movie;

}
