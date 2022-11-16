import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataRetService } from '../data-ret.service';
import { ChartType } from 'angular-google-charts';

interface piReadingJSON{
  model: string;
  pk: number;
  fields: {
    pi_reading_date: Date;
    pi_reading_time: Time;
    pi_reading_val: number;
  };
};

//PARENT of select-days
@Component({
  selector: 'app-pireading-chart',
  templateUrl: './pireading-chart.component.html',
  styleUrls: ['./pireading-chart.component.sass']
})
export class PireadingChartComponent implements OnInit {
  //count for days of pi readings
  piChartDaysCount: any;
  //insta-read variable
  piInstaReadResult: any;
  //empty array for raw JSON data from API
  piJSONData: any;
  //pi chart data array
  piDataForChart: any = [];

  chartData = {
    title: '',
    type: ChartType.LineChart,
    data: this.piDataForChart,
    columnNames: ["date","moisture"],
    options: {   
      hAxis: {
          title: 'Date'
      },
      vAxis:{
          title: 'Moisture Reading'
      },
    },
    width: 900,
    height: 600
};


  constructor(private service: DataRetService) { 
    this.piDataForChart = this.getPiData(10);
  }

  public popPiData(inputPiArray: [piReadingJSON]){
    //populate JSON data into array for chart
    let outputPiArray = [];
    for (let i = 0; i<inputPiArray.length; i++){
      outputPiArray.push([String(inputPiArray[i].fields.pi_reading_date), Number(inputPiArray[i].fields.pi_reading_val)]);
    }
    return outputPiArray;
  }

  public getPiData(piChartDaysCount: any){
    //get JSON data from API
    this.service.getPiReadData(piChartDaysCount)
    .subscribe( (data) => {
      this.piJSONData = data;
      this.piDataForChart = this.popPiData(this.piJSONData);
      console.log(this.piDataForChart);
    })
      return this.piDataForChart;
  }

  public instaPiRead(){
    //get instant reading data from API
    this.service.getInstaRead()
    .subscribe((data) =>{
      this.piInstaReadResult = data;
      //console.log(this.piInstaReadResult)
    })
    return this.piInstaReadResult
  }


  ngOnInit(): void {
    this.piChartDaysCount = 10;
    this.instaPiRead();
  }

}
