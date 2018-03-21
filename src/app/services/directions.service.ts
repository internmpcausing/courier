import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ILatLng } from './../models/directions.model';
import { MyGlobals } from './../globals';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DirectionsService {

  constructor(private http:HttpClient) { }

  getDecode(str: string):Observable<Object>{
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${str}&key=${MyGlobals.googleApiKey}`).map(result => {
      return {label: result.results[0].formatted_address};
    })
  }
}
