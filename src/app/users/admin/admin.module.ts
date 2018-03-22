import { MyGlobals } from './../../globals';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module'
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'

//  Component
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './../../shared/header/header.component';
import { HomeComponent } from './home/home.component';

// Reducers
import { PlaceSuggestionsReducer } from './../../reducers/place.reducer';
import { DirectionsReducer } from './../../reducers/directions.reducer';

// Effects
import { PlaceEffects } from './../../effects/place.effect';
import { DirectionsEffects } from './../../effects/directions.effects';

//Serices
import { PlaceService } from './../../services/place.service';
import { DirectionsService } from './../../services/directions.service';

import { AdminRoutingModule } from './admin-routing.module';
import { LeftSideBarComponent } from './home/left-side-bar/left-side-bar.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: MyGlobals.googleApiKey ,
      libraries: [ 'places' ]
      
    }),
  ],
  declarations: [
    AdminComponent, 
    HeaderComponent, 
    HomeComponent, LeftSideBarComponent
  ]
})
export class AdminModule { }
