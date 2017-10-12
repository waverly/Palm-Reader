import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { PrismicService } from '../shared/prismic.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  private _getUrl = 'api/prismic/get/';

  constructor( private prismicService: PrismicService ) { }

  isIn = false;

  toggleState() {
    // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
    console.log('in toggle state');
  }

  ngOnInit() {

  }

}
