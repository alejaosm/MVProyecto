import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RootObject } from 'src/app/models/Comics';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private _http: HttpClient) { }

  PUBLIC_KEY= 'b650f479090271b5996bcf880d60adc3';
  HASH='e9de6d02a7b4e546c82fd7c815d089d7';
  URL_API=  `http://gateway.marvel.com/v1/public/series?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  
  getAllSeries (): Observable<RootObject> {
    return  this._http.get<RootObject>(this.URL_API);
  }

}
