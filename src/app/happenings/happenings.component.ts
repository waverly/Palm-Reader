import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Happening } from './happening';
import { PrismicService } from '../shared/prismic.service';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-happenings',
  templateUrl: './happenings.component.html',
  styleUrls: ['./happenings.component.scss']
})
export class HappeningsComponent implements OnInit {

  happenings : Happening[];


  private _getUrl = 'api/prismic/get/';

  constructor( private _feedService: PrismicService) { }

  getHappenings(page): void{
  this._feedService.getFeed('happenings', page)
  .subscribe(
    res=>{
      this.happenings = res.results;
      console.log(this.happenings);
    },
    error=>{
      console.log('there was an error in the artist feed component im very sorry');
    }
    );
  }

  onMouseOver(src): void{
    const imgDiv = document.querySelector('.img-div');
    imgDiv.setAttribute('style', `background-image:url('${src}');`);
    imgDiv.classList.toggle('visibility');
    console.log('mouse in');
  }

  onMouseOut(): void{
    const imgDiv = document.querySelector('.img-div');
    imgDiv.classList.toggle('visibility');
    console.log('mouse out');
  }

  ngOnInit() {
    this.getHappenings(0);
  }

}
