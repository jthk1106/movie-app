import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './user.service';
import { NewuserService } from './newuser.service';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoritesService } from './favorites.service';
import { SaveService } from './save.service';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        MovieComponent,
        SearchComponent,
        RegistrationComponent,
        FavoritesComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ClarityModule,
        ROUTING,
        HttpClientModule
    ],
    providers: [MovieService, UserService, NewuserService, FavoritesService, SaveService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
