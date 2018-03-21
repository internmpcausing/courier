



import { MyGlobals } from './../../globals';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ClientRoutingModule } from './client-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module'
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'

//  Component
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './../../shared/header/header.component';
import { MapComponent } from './home/map/map.component';
import { LeftSideBarComponent } from './home/left-side-bar/left-side-bar.component';

// Reducers
import { PlaceSuggestionsReducer } from './../../reducers/place.reducer';
import { DirectionsReducer } from './../../reducers/directions.reducer';

// Effects
import { PlaceEffects } from './../../effects/place.effect';
import { DirectionsEffects } from './../../effects/directions.effects';

//Serices
import { PlaceService } from './../../services/place.service';
import { DirectionsService } from './../../services/directions.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forRoot({
      placeSuggestions:PlaceSuggestionsReducer,
      directions:DirectionsReducer

    }),
    EffectsModule.forRoot([PlaceEffects, DirectionsEffects]),
    AgmCoreModule.forRoot({
      apiKey: MyGlobals.googleApiKey ,
      libraries: [ 'places' ]
      
    }),
    AgmDirectionModule
  ],
  declarations: [
    ClientComponent, 
    HomeComponent,
    HeaderComponent,
    MapComponent,
    LeftSideBarComponent
  ],
  providers:[MyGlobals, PlaceService, DirectionsService]
})
export class ClientModule { }
