import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MovieProfileComponent } from './components/movie-profile/movie-profile.component';
import { PageMovieProfileComponent } from './pages/page-movie-profile/page-movie-profile.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
    declarations: [
        AppComponent,
        PageHomeComponent,
        MovieListComponent,
        MovieListItemComponent,
        MovieProfileComponent,
        PageMovieProfileComponent,
        MenuComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
