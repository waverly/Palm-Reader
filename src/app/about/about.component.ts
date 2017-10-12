import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrismicService } from '../shared/prismic.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: Object;

  private _getUrl = 'api/prismic/get/';

  constructor( private _feedService: PrismicService) { }

  getAbout(page) : void{
    this._feedService.getFeed('about', page)
    .subscribe(
      res=>{
        this.about = res.results["0"].data;
        console.log(this.about);
      },
      error=>{
        console.log('there was an error in the artist feed component im very sorry');
      }
    );
  }

  ngOnInit() {
    this.getAbout(0);
  }

}
