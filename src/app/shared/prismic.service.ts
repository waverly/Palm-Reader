import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http';
// import {Feed} from './feed';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Artist } from '../artist/artists/artist';
import { Exhibition } from '../exhibitions/exhibition';

@Injectable()
  export class PrismicService {

    private _getUrl = 'api/prismic/get/';

    constructor(private _http:Http) { }

  getArtists(type, page): Observable<any> {
      console.log(type, page)
       return this._http.get(this._getUrl+'all?page='+page+'&type='+type)
         .map((response: Response)=> <any> response.json())
         .do(data => console.log(data))
         .catch(this.handleError);
    }

    getExhibitions(type, page): Observable<any> {
      console.log(type, page)
       return this._http.get(this._getUrl+'all?page='+page+'&type='+type)
         .map((response: Response)=> <any> response.json())
         .do(data => console.log(data))
         .catch(this.handleError);
      }

    getFeed(type, page): Observable<any> {
      console.log(type, page)
     return this._http.get(this._getUrl+'all?page='+page+'&type='+type)
       .map((response: Response)=> <any> response.json())
       .do(data => console.log(data))
       .catch(this.handleError);
    }

    getSingle(type, uid): Observable<any> {
    return this._http.get(this._getUrl+'single?type='+type+'&uid='+uid)
      .map((response: Response)=> <any> response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
    }

    getImgGallery(type, uid): Observable<any> {
    return this._http.get(this._getUrl+'single?type='+type+'&uid='+uid)
      .map((response: Response)=> <any> response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
    }

    private handleError(error: Response){
    console.log("error", error);
    return Observable.throw(error.json().error || 'Server error');
    }

  }
