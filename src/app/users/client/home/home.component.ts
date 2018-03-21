
import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as DirectionsActions from './../../../actions/directions.action';
import { Actions, Effect } from '@ngrx/effects';
import { ISubscription } from 'rxjs/Subscription';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: ISubscription[] = [];
  placeSuggestions$: Observable<any>;
  directions$: Observable<any>;
  directionsModel = {
    origin: '',
    destination: ''
  }
  constructor(private _loader: MapsAPILoader, private _zone: NgZone, private store: Store<any>, private actions: Actions){
    this.directions$ = this.store.select('directions');

    this.subscription.push(
    this.actions.ofType(DirectionsActions.GEO_DECODE_ORIGIN_SUCCESS).subscribe(data => {
      this.directionsModel.origin = (<any>data).payload.label;
    }));

    this.subscription.push(
    this.actions.ofType(DirectionsActions.GEO_DECODE_DESTINATION_SUCCESS).subscribe(data => {
      this.directionsModel.destination = (<any>data).payload.label;
    }));
  }

  ngOnInit() {
    this.autocomplete();
  }

  ngOnDestroy(){
    for(let s of this.subscription){
      s.unsubscribe();
    }
  }
	
	autocomplete() {
		this._loader.load().then(() => {
				var autocompleteFrom = new google.maps.places.Autocomplete(document.getElementById("autocompleteInputFrom"), {});
				google.maps.event.addListener(autocompleteFrom, 'place_changed', () => {
						this._zone.run(() => {
              var place = autocompleteFrom.getPlace();
							this.store.dispatch(new DirectionsActions.SetOrigin({
                lat: place.geometry.location.lat(),
								lng: place.geometry.location.lng(),
								label: place.name,
              }));
						});
        });
        
        var autocompleteTo = new google.maps.places.Autocomplete(document.getElementById("autocompleteInputTo"), {});
				google.maps.event.addListener(autocompleteTo, 'place_changed', () => {
						this._zone.run(() => {
              var place = autocompleteTo.getPlace();
              this.store.dispatch(new DirectionsActions.SetDestination({
                lat: place.geometry.location.lat(),
								lng: place.geometry.location.lng(),
								label: place.name,
              }));
						});
				});
		});
  }

  dragEndOrigin(event){
    this.store.dispatch(new DirectionsActions.SetOrigin({
      lat: event.coords.lat,
      lng: event.coords.lng
    }));
    this.store.dispatch(new DirectionsActions.GeoDecodeOrigin(`${event.coords.lat},${event.coords.lng}`));
  }

  dragEndDestination(event){
    this.store.dispatch(new DirectionsActions.SetDestination({
      lat: event.coords.lat,
      lng: event.coords.lng
    }));
    this.store.dispatch(new DirectionsActions.GeoDecodeDestination(`${event.coords.lat},${event.coords.lng}`));
  }

  next(){
    console.log('next click');
  }

  back(){
    console.log('back click');
  }

}
