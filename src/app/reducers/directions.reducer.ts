
import * as DirectionsActions from './../actions/directions.action';
import { IDirections } from './../models/directions.model';

export type Action = DirectionsActions.All;

const InitialState:IDirections = {
    origin: null,
    destination: null
}

export function DirectionsReducer(state:IDirections = InitialState, action: Action){
    switch (action.type) {
        case DirectionsActions.SET_ORIGIN:
        return {...state, origin: {...action.payload}};

        case DirectionsActions.SET_DESTINATION:
        return {...state, destination: {...action.payload}};

        case DirectionsActions.GEO_DECODE_ORIGIN:
        return state;

        case DirectionsActions.GEO_DECODE_ORIGIN_SUCCESS:
        return {...state, origin: Object.assign({}, state.origin, action.payload)};

        case DirectionsActions.GEO_DECODE_DESTINATION:
        return state;

        case DirectionsActions.GEO_DECODE_DESTINATION_SUCCESS:
        return {...state, destination: Object.assign({}, state.destination, action.payload)};

        default:
            return state;
    }
}
