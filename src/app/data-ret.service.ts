import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataRetService {
  daysVal: any;
  private rooturl = 'http://localhost:8000'
  private weatherApiURLDays = '/weatherapi/weatherlimit/';
  private piReadURLDays = '/pireadingapi/pireadinglimit/';

  constructor(private http: HttpClient) { }

  getWeatherData(daysVal: any){
    const finUrl = this.rooturl + this.weatherApiURLDays + daysVal + "/";
        //console.log(finUrl);
        return this.http.get(finUrl);
  }

  getPiReadData(pidaysVal: any){
    const finpiurl = this.rooturl + this.piReadURLDays + pidaysVal +"/";
    return this.http.get(finpiurl);
  }

  getInstaRead(){
    const instaReadurl = this.rooturl + '/pireadingapi/instareadpi/';
    return this.http.get(instaReadurl);
  }
}
