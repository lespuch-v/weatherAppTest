import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainCardComponentComponent, MainConfigCard } from './main-card-component/main-card-component.component';
import { WeatherService } from './weather.service';
import { AddWeatherCardComponent } from './add-weather-card/add-weather-card.component';
import { NgForOf, NgIf } from '@angular/common';
import { WeatherModalComponent } from './weather-modal/weather-modal.component';
import { LocalStorageService, StoredCity } from './local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainCardComponentComponent, AddWeatherCardComponent, NgIf, WeatherModalComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  weatherCards: MainConfigCard[] = [];
  showModal = false;

  constructor(
    private weatherApi: WeatherService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.loadStoredCities();
  }

  private loadStoredCities() {
    const cities = this.storageService.getCities();
    cities.forEach(city => this.loadCityWeather(city));
  }

  private loadCityWeather(city: StoredCity) {
    this.weatherApi.getCurrentWeatherForCity(city.lat, city.lon).subscribe({
      next: (result) => {
        const cardConfig: MainConfigCard = {
          cityName: result.name,
          temperature: result.main.temp,
          weatherStatus: result.weather[0].main,
          windConditions: result.wind.speed,
          humidity: result.main.humidity,
        };
        this.weatherCards.push(cardConfig);
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
      }
    });
  }

  handleAddCity(cityName: string): void {
    this.weatherApi.getCityData(cityName).subscribe({
      next: (cityData) => {
        const newCity: StoredCity = {
          name: cityData.name,
          lat: cityData.lat,
          lon: cityData.lon
        };
        this.storageService.addCity(newCity);
        this.loadCityWeather(newCity);
        this.showModal = false;
      },
      error: (error) => {
        console.error('Error adding city:', error);
      }
    });
  }

  handleDeleteCard(index: number) {
    const cityToDelete = this.weatherCards[index];
    this.storageService.removeCity(cityToDelete.cityName);
    this.weatherCards = this.weatherCards.filter((_, i) => i !== index);
  }
}
