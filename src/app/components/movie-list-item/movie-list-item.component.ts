import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie';


@Component({
    selector: 'app-movie-list-item',
    templateUrl: './movie-list-item.component.html',
})
export class MovieListItemComponent {

    @Input() movie: Movie = null;

}
