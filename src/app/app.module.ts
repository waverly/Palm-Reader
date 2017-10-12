import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { HttpModule } from '@angular/http';

import { PrismicService } from './shared/prismic.service'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ArtistsComponent } from './artist/artists/artists.component';
import { ExhibitionFeedComponent } from './exhibitions/exhibition-feed/exhibition-feed.component';
import { HomeComponent } from './home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { ArtistDetailComponent } from './artist/artist-detail/artist-detail.component';
import { FilterPipePipe } from './shared/filter-pipe.pipe';
import { ExhibitionDetailComponent } from './exhibitions/exhibition-detail/exhibition-detail.component';
import { HappeningsComponent } from './happenings/happenings.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArtistsComponent,
    ExhibitionFeedComponent,
    ArtistDetailComponent,
    HomeComponent,
    FilterPipePipe,
    ExhibitionDetailComponent,
    HappeningsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    HttpModule,
    RouterModule.forRoot([
      { path: 'artists', component: ArtistsComponent },
      { path: 'artists/:artist', component: ArtistDetailComponent },
      { path: 'exhibitions/:exhibition', component: ExhibitionDetailComponent },
      { path: 'exhibitions', component: ExhibitionFeedComponent },
      { path: 'happenings', component: HappeningsComponent },
      { path: 'about', component: AboutComponent },
      { path: '', component: HomeComponent }
        // { path: 'fashionweek/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent },
    ])
  ],
  providers: [
    PrismicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
