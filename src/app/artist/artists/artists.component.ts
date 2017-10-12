import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Artist } from './artist';
import { PrismicService } from '../../shared/prismic.service';

// import { fadeInAnimation } from '../../animations/index';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists : Artist[];

  private _getUrl = 'api/prismic/get/';

  constructor( private _feedService: PrismicService) { }

  onMouseOver(src): void{
    const imgDiv = document.querySelector('.img-div');
    imgDiv.setAttribute('style', `background-image:url('${src}');`);
    imgDiv.classList.toggle('visibility');

  }

  onMouseOut(): void{
    const imgDiv = document.querySelector('.img-div');
    imgDiv.classList.toggle('visibility');
  }

  getArtists(page): void{
  this._feedService.getFeed('artist', page)
  .subscribe(
    res=>{
      this.artists = res.results;
      console.log(this.artists);
    },
    error=>{
      console.log('there was an error in the artist feed component im very sorry');
    }
    );
  }

  ngOnInit() {
    console.log('in artist component');
    this.getArtists(0);
  }
}
