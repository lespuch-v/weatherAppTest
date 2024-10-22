import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainCardComponentComponent, MainConfigCard } from './main-card-component/main-card-component.component';
import { WeatherService } from './weather.service';
import { AddWeatherCardComponent } from './add-weather-card/add-weather-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainCardComponentComponent, AddWeatherCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  lat!: number;
  lon!: number;
  weatherData: any = null;
  cardConfig: MainConfigCard | null = null;

  constructor(private weatherApi: WeatherService) {
  }

  ngOnInit() {
    this.getCity();
  }

  getCity() {
    this.weatherApi.getCityData('Prague').subscribe(result => {
      console.log(result);
      this.lat = result.lat;
      this.lon = result.lon;
      this.getWeather();
    });
  }

  getWeather() {
    this.weatherApi.getCurrentWeatherForCity(this.lat, this.lon).subscribe({
      next: (result) => {
        console.log('Weather data:', result);
        this.weatherData = result;
        this.updateCardConfig();
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
      }
    });
  }

  updateCardConfig() {
    if (this.weatherData) {
      this.cardConfig = {
        cityName: this.weatherData.name,
        temperature: this.weatherData.main.temp,
        weatherStatus: this.weatherData.weather[0].main,
        windConditions: this.weatherData.wind.speed,
        humidity: this.weatherData.main.humidity,
      };
    }
  }

  handleDeleteCard(cardId: any): void {

  }

  handleAddNewCity() {

  }
}
