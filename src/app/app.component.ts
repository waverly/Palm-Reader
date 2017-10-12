import { Component, OnInit} from '@angular/core';
import {PrismicService} from './shared/prismic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

  private _getUrl = 'api/prismic/get/';

  constructor( private _feedService: PrismicService ) { }

  getPage(page): void{
  this._feedService.getFeed('page', page)
  .subscribe(
    res=>{
      console.log(res);
    },
    error=>{
      console.log('there was an error im very sorry');
    }
    );
  }



ngOnInit(): void{
  


}



}
