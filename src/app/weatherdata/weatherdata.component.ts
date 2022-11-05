import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataRetService } from '../data-ret.service';

interface weatherapiJSON {
  model: string;
  pk: number;
  fields: {
      weather_api_date: Date;
      temp1: number;
      temp_min: number;
      temp_max: number;
      loc_1: string;
      weather_main: string;
  }; 
}; 

@Component({
  selector: 'app-weatherdata',
  templateUrl: './weatherdata.component.html',
  styleUrls: ['./weatherdata.component.sass']
})
export class WeatherdataComponent implements OnInit {
  dateValue: any;
  limitData: any = [];
  //CONFIGURING CHILD
  @Output() newDayVal =  new EventEmitter<number>();

  setDayVal(value: number){
    console.log(this.newDayVal.emit(value));
    this.newDayVal.emit(value);
    
  }

  constructor(private service: DataRetService) { }

  public getLimitTemps(dayCount: any){
    this.dateValue = dayCount;
    this.service.getWeatherData(dayCount)
    .subscribe( (data) =>{
        this.limitData = data;
    })
    return this.limitData;
}

  ngOnInit(): void {
  }

}
