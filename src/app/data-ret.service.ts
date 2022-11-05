import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataRetService {
  daysVal: any;
  private weatherApiURLDays = 'http://localhost:8000/weatherapi/weatherlimit/';


  constructor(private http: HttpClient) { }

  getWeatherData(daysVal: any){
    const finUrl = this.weatherApiURLDays + daysVal + "/";
        //console.log(finUrl);
        return this.http.get(finUrl);
  }
}
