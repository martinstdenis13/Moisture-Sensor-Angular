import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
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

//PARENT component for days from select-days
@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.sass']
})
export class WeatherChartComponent implements OnInit {
  //get day count from mat-option in select-days CHILD

  setChartCount(newItem: string) {
    this.testDaysVal = newItem;
    //console.log("Parent: "+ newItem);
    this.weatherChartData = this.getChartData(newItem);
  }
  testDaysVal: any = 0;

  getDayVal(dayValue: number){
    this.chartDaysCount = dayValue;
  }
  //set create var for days of chart
  chartDaysCount: any;
  //create empty array for weather data JSON Objects
  weatherJSONData: any = [];
  //create empty array for weather data extracted from JSON
  weatherChartData: any = [];
  testDataForChart: any = [];
  chartData = {
    title: '',
    type: ChartType.LineChart,
    data: this.testDataForChart,
    columnNames: ["date","avg","min","max"],
    options: {   
      hAxis: {
          title: 'Month'
      },
      vAxis:{
          title: 'Temperature'
      },
    },
    width: 900,
    height: 600
};
  

  constructor(private service: DataRetService) { 
    this.weatherChartData = this.getChartData(10);
    
  }
  

  public getChartData(chartDays: any){
    this.service.getWeatherData(chartDays)
    .subscribe( (data) => {
      this.weatherJSONData = data;
      this.weatherChartData = this.popChartData(this.weatherJSONData)
      this.testDataForChart = this.popChartData(this.weatherJSONData)
      this.chartDaysCount = chartDays;
      //console.log("Test Return: "+ this.weatherChartData)
      return this.weatherChartData;
    })
  }

  //function to populate data from weatherAPI JSON into array for chart
  public popChartData(inputArray: [weatherapiJSON]){
    let outputArray = []
    for (let i = 0; i<inputArray.length; i++){
      outputArray.push([String(inputArray[i].fields.weather_api_date), Number(inputArray[i].fields.temp1),
      Number(inputArray[i].fields.temp_min),Number(inputArray[i].fields.temp_max)])  
    }
    //reverse array so chart is left to right   
    return outputArray.reverse();
  }

  ngOnInit(): void {   

  }

  

}
