import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { DirectionsService } from '../services/directions.service';

import * as DirectionsActions from './../actions/directions.action';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

export type Action = DirectionsActions.All;

@Injectable()
export class DirectionsEffects{
    constructor(private actions:Actions, private directionsService:DirectionsService){}

    @Effect()
    GeoDecodeOrigin$: Observable<Action> = this.actions
        .ofType(DirectionsActions.GEO_DECODE_ORIGIN)
        .switchMap((action: DirectionsActions.GeoDecodeOrigin) =>
            this.directionsService
                .getDecode(action.payload)
                .map(data => {
                    return new DirectionsActions.GeoDecodeOriginSuccess(data)
                })
        );

    @Effect()
    GeoDecodeDestination$: Observable<Action> = this.actions
        .ofType(DirectionsActions.GEO_DECODE_DESTINATION)
        .switchMap((action: DirectionsActions.GeoDecodeDestination) =>
            this.directionsService
                .getDecode(action.payload)
                .map(data => {
                    return new DirectionsActions.GeoDecodeDestinationSuccess(data)
                })
        );

    // @Effect()
    // GetDestination$: Observable<Action> = this.actions
    //     .ofType(DirectionsActions.GET_DESTINATION)
    //     .switchMap((action: DirectionsActions.GetDestination) =>
    //         this.directionsService
    //             .getDecodedPlaceId(action.payload)
    //             .map(data => {
    //                 return new DirectionsActions.GetDestinationSuccess(data)
    //             })
    //     );

    // @Effect()
    // GetDirectionSteps$: Observable<Action> = this.actions
    //     .ofType(DirectionsActions.GET_DIRECTION_STEPS)
    //     .switchMap((action: DirectionsActions.GetDirectionSteps) =>
    //         this.directionsService
    //             .getDirectionSteps(action.payload.origin, action.payload.destination)
    //             .map(data  => {
    //                 return new DirectionsActions.GetDirectionStepsSuccess({distance: data.distance, duration: data.duration, steps: data.steps})
    //             })
    //     );
}