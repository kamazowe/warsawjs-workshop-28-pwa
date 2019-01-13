import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMovieProfileComponent } from './pages/page-movie-profile/page-movie-profile.component';

const routes: Routes = [

    {
        path: '',
        component: PageHomeComponent,
    },
    {
        path: 'movies/:id',
        component: PageMovieProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
        useHash: true
    })],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
