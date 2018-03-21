
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { IDirections } from './../../../../models/directions.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() directions: IDirections;
  lat: number =  14.6390175;
  lng: number = 121.0261686;
  mapZoomLevel: number = 12;
  constructor() { }

  ngOnInit() {
  }

  @Output() dragEndOrigin = new EventEmitter<any>();
  onDragEndOrigin(event){
    this.dragEndOrigin.emit(event);
  }

  @Output() dragEndDestination = new EventEmitter<any>();
  onDragEndDestination(event){
    this.dragEndDestination.emit(event);
  }

}
