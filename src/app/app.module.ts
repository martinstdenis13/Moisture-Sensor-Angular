import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DataRetService } from './data-ret.service';
import { WeatherdataComponent } from './weatherdata/weatherdata.component';
import { WeatherChartComponent } from './weather-chart/weather-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { SelectDaysComponent } from './select-days/select-days.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PireadingChartComponent } from './pireading-chart/pireading-chart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    AppComponent,
    WeatherdataComponent,
    WeatherChartComponent,
    SelectDaysComponent,
    ToolBarComponent,
    PireadingChartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GoogleChartsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,

  ],
  providers: [
    DataRetService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
