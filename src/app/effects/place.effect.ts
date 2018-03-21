import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { PlaceService } from '../services/place.service';
import * as placeActions from './../actions/place.action';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

export type Action = placeActions.All;

@Injectable()
export class PlaceEffects{
    constructor(private actions:Actions, private placeService:PlaceService){}

    @Effect()
    GetFromSuggestions$: Observable<Action> = this.actions
        .ofType(placeActions.GET_FROM_PLACE_SUGGESTION)
        .switchMap((action: placeActions.GetFromPlaceSuggestion) =>
            this.placeService
                .getFromSuggestions(action.payload)
                .map(data => {
                    return new placeActions.GetFromPlaceSuggestionSuccess(data)
                })
        );

    @Effect()
    GetToSuggestions$: Observable<Action> = this.actions
        .ofType(placeActions.GET_TO_PLACE_SUGGESTION)
        .switchMap((action: placeActions.GetToPlaceSuggestion) =>
            this.placeService
                .getToSuggestions(action.payload)
                .map(data => {
                    return new placeActions.GetToPlaceSuggestionSuccess(data)
                })
        );
}