

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlaceSuggestions } from './../../reducers/place.reducer';
import { Observable } from 'rxjs/Observable';
import * as PlaceActions from './../../actions/place.action';
export type Action = PlaceActions.All;

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  constructor(){
  }

  ngOnInit() {
  }

}
