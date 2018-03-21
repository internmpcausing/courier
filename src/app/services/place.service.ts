

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IPlace } from './../models/place.model';
import { MyGlobals } from './../globals';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PlaceService {

  constructor(private http:HttpClient) { }

  getFromSuggestions(str: string):Observable<IPlace[]>{
    return this.http.get<any>(`${MyGlobals.serverAddress}api/map/place/autocomplete?input=${str}`).map(result => {
      return result;
    })
  }

  getToSuggestions(str: string):Observable<IPlace[]>{
    return this.http.get<any>(`${MyGlobals.serverAddress}api/map/place/autocomplete?input=${str}`).map(result => {
      return result;
    })
  }
}
