import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataRetService } from '../data-ret.service';


//CHILD component to weather-chart
@Component({
  selector: 'app-select-days',
  templateUrl: './select-days.component.html',
  styleUrls: ['./select-days.component.sass']
})
export class SelectDaysComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  //declaring 'all' property for mat-option to select all results
  all = "all";

  setDayCount(value: string) {
    this.newItemEvent.emit(value);
  }
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
