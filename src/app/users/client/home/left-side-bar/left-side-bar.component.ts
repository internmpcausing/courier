

import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {
  @Input() directions:any;
  constructor() {
    
  }

  ngOnInit() {
  }

  @Output() next = new EventEmitter<any>();
  onNext(){
    this.next.emit();
  }

  @Output() back = new EventEmitter<any>();
  onBack(){
    this.back.emit();
  }

}
