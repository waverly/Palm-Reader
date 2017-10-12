import { Component, OnInit } from '@angular/core';
import {PrismicService} from '../../shared/prismic.service';

import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import { Artist } from '../artists/artist';

import { fadeInAnimation } from '../../animations/index';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ArtistDetailComponent implements OnInit {

  detail: Object;
  galleryArray : Object;
  error: Object;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _feedService: PrismicService
  ) { }

  ngOnInit() {
    let id = this._route.snapshot.params.artist;
    let type = this._route.snapshot.url["0"].path;

    this._feedService.getSingle('artist',id)
    .subscribe(
      d=> {
        this.detail = d.results[0];
        this.galleryArray = d.results[0].data["artist.body"].value["0"].repeat;
        },
      error=>this.error=<any>error
    );
  }

}
