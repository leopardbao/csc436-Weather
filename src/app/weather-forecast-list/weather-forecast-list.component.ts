import { Component, OnInit, Input } from '@angular/core';
import { weatherBit } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from  '../models/weather-forecast';
import { CityDetails } from '../models/city-details';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  @Input() searchText: string;
  cityDetails: CityDetails;
  constructor(private http: HttpClient) {
    this.weatherForecasts = [];
    this.weatherBitUrl = ``;
  }

  getWeather() {
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;
    this.http.get(this.weatherBitUrl).subscribe((results: any) => {
      this.cityDetails = new CityDetails(results['city_name'], results['timezone'],results['state_code']);
      this.weatherForecasts = results['data'].map(forecast => new WeatherForecast(forecast));
      console.log(this.cityDetails);
      console.log(this.weatherForecasts);
    })
  }

  ngOnInit() {
  }

}
