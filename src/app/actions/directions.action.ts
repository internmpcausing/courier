import { Action } from '@ngrx/store';
import { IDirections, ILatLng } from './../models/directions.model';


export const SET_ORIGIN =                       '[Directions] Set origin';
export const SET_DESTINATION =                  '[Directions] Set destination';
export const GEO_DECODE_ORIGIN =                '[Directions] Geodecode Origin Lat Lng';
export const GEO_DECODE_ORIGIN_SUCCESS =        '[Directions] Geodecode Origin Lat Lng Success';
export const GEO_DECODE_DESTINATION =           '[Directions] Geodecode Destination Lat Lng';
export const GEO_DECODE_DESTINATION_SUCCESS =   '[Directions] Geodecode Destination Lat Lng Success';



export class SetOrigin implements Action{
    readonly type = SET_ORIGIN;
    constructor(public payload: ILatLng){}
}

export class SetDestination implements Action{
    readonly type = SET_DESTINATION;
    constructor(public payload: ILatLng){}
}

export class GeoDecodeOrigin implements Action{
    readonly type = GEO_DECODE_ORIGIN;
    constructor(public payload: string){}
}

export class GeoDecodeOriginSuccess implements Action{
    readonly type = GEO_DECODE_ORIGIN_SUCCESS;
    constructor(public payload: Object){}
}

export class GeoDecodeDestination implements Action{
    readonly type = GEO_DECODE_DESTINATION;
    constructor(public payload: string){}
}

export class GeoDecodeDestinationSuccess implements Action{
    readonly type = GEO_DECODE_DESTINATION_SUCCESS;
    constructor(public payload: Object){}
}

export type All = 
      SetOrigin
    | SetDestination
    | GeoDecodeOrigin
    | GeoDecodeOriginSuccess
    | GeoDecodeDestination
    | GeoDecodeDestinationSuccess;