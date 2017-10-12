import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Exhibition } from '../exhibition';
import { PrismicService } from '../../shared/prismic.service';

import { DatePipe } from '@angular/common';

import { fadeInAnimation } from '../../animations/index';

@Component({
  selector: 'app-exhibition-feed',
  templateUrl: './exhibition-feed.component.html',
  styleUrls: ['./exhibition-feed.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class ExhibitionFeedComponent implements OnInit {

  exhibitions : Exhibition[];
  current : Exhibition[];
  past: Exhibition[];
  future: Exhibition[];


  private _getUrl = 'api/prismic/get/';

  constructor( private _feedService: PrismicService ) { }

  getExhibitions(page): void{
    this._feedService.getExhibitions('exhibition', page)
      .subscribe(
        res => {
          this.exhibitions = res.results;
          console.log(this.exhibitions);

          let current = [];
          let past = [];
          let future = [];
          let today = Date.now();

          if(res.results.length){
            this.current = res.results.filter((item) => {
              let startDateString = item.data["exhibition.start-date"].value;
              let endDateString = item.data["exhibition.end-date"].value;
              let startDate = new Date(startDateString);
              let endDate = new Date(endDateString);
              let title = item.data["exhibition.title"].value["0"].text;

              // current
              // ... start date less than current date,
              // ... end date greater than current date
              if ( Number(today) > Number(startDate) && Number(today) < Number(endDate) ){
                return item;
              }
            }),

          this.past = res.results.filter((item) => {
            // let today = Date.now();
            let startDateString = item.data["exhibition.start-date"].value;
            let endDateString = item.data["exhibition.end-date"].value;
            let startDate = new Date(startDateString);
            let endDate = new Date(endDateString);
            let title = item.data["exhibition.title"].value["0"].text;

            // current
            // ... start date less than current date,
            // ... end date greater than current date
            if ( Number(today) > Number(startDate) && Number(today) > Number(endDate) ){
              return item;
            }
          }),

          this.future = res.results.filter((item) => {
            // let today = Date.now();
            let startDateString = item.data["exhibition.start-date"].value;
            let endDateString = item.data["exhibition.end-date"].value;
            let startDate = new Date(startDateString);
            let endDate = new Date(endDateString);
            let title = item.data["exhibition.title"].value["0"].text;

            if ( Number(today) < Number(startDate) ){
              return item;
            }
          });
          }

        },
        error=>{
          console.log('there was an error with exhibitions');
        }
      );
  }

  ngOnInit() {
    this.getExhibitions(0);
  }

}
