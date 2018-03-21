
import { Action } from '@ngrx/store';
import { IPlace } from './../models/place.model';


export const GET_FROM_PLACE_SUGGESTION =            '[Place] Get from suggestion';
export const GET_FROM_PLACE_SUGGESTION_SUCCESS =    '[Place] Success getting from suggestion';
export const GET_TO_PLACE_SUGGESTION =              '[Place] Get to suggestion';
export const GET_TO_PLACE_SUGGESTION_SUCCESS =      '[Place] Success getting to suggestion';
export const SELECT_FROM_SUGGESTION =               '[Place] Select from suggestion';
export const SELECT_TO_SUGGESTION =                 '[Place] Select to suggestion';

export class GetFromPlaceSuggestion implements Action{
    readonly type = GET_FROM_PLACE_SUGGESTION;
    constructor(public payload: string){}
}

export class GetFromPlaceSuggestionSuccess implements Action{
    readonly type = GET_FROM_PLACE_SUGGESTION_SUCCESS;
    constructor(public payload: IPlace[]){}
}

export class GetToPlaceSuggestion implements Action{
    readonly type = GET_TO_PLACE_SUGGESTION;
    constructor(public payload: string){}
}

export class GetToPlaceSuggestionSuccess implements Action{
    readonly type = GET_TO_PLACE_SUGGESTION_SUCCESS;
    constructor(public payload: IPlace[]){}
}

export class SelectFromSuggestion implements Action{
    readonly type = SELECT_FROM_SUGGESTION;
    constructor(public payload: IPlace){}
}

export class SelectToSuggestion implements Action{
    readonly type = SELECT_TO_SUGGESTION;
    constructor(public payload: IPlace){}
}


export type All = 
      GetFromPlaceSuggestion
    | GetFromPlaceSuggestionSuccess
    | GetToPlaceSuggestion
    | GetToPlaceSuggestionSuccess
    | SelectFromSuggestion
    | SelectToSuggestion;