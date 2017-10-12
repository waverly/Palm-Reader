import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';

import { Exhibition } from '../exhibition';
import { PrismicService } from '../../shared/prismic.service';

import { DatePipe } from '@angular/common';

import { fadeInAnimation } from '../../animations/index';

import * as $ from 'jquery';

@Component({
  selector: 'app-exhibition-detail',
  templateUrl: './exhibition-detail.component.html',
  styleUrls: ['./exhibition-detail.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class ExhibitionDetailComponent implements OnInit {

  detail: Object;
  error: Object;
  data: Object;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _feedService: PrismicService
  ) { }

  scrollToAnchor(aid){
    let aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  ngOnInit() {
    let id = this._route.snapshot.params.exhibition;
    console.log('this id is ' + id);

    this._feedService.getSingle('exhibition',id)
    .subscribe(
      d=> {
        this.detail = d.results[0];
        this.data = d.results[0].data;
        console.log(this.data);
        },
      error=>this.error=<any>error
    );

  }

}
