import { Injectable } from '@angular/core';

export interface StoredCity {
  name: string;
  lat: number;
  lon: number;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly CITIES_KEY = 'weather_cities';
  private readonly DEFAULT_CITIES: StoredCity[] = [
    { name: 'London', lat: 51.5074, lon: -0.1278 },
    { name: 'Paris', lat: 48.8566, lon: 2.3522 },
    { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
    { name: 'New York', lat: 40.7128, lon: -74.0060 }
  ];

  constructor() {
    // Initialize default cities if nothing is stored
    if (!this.getCities().length) {
      this.setCities([this.getRandomDefaultCity()]);
    }
  }

  getCities(): StoredCity[] {
    const cities = localStorage.getItem(this.CITIES_KEY);
    return cities ? JSON.parse(cities) : [];
  }

  setCities(cities: StoredCity[]): void {
    localStorage.setItem(this.CITIES_KEY, JSON.stringify(cities));
  }

  addCity(city: StoredCity): void {
    const cities = this.getCities();
    // Check if city already exists
    if (!cities.some(c => c.name === city.name)) {
      cities.push(city);
      this.setCities(cities);
    }
  }

  removeCity(cityName: string): void {
    const cities = this.getCities();
    this.setCities(cities.filter(city => city.name !== cityName));
  }

  private getRandomDefaultCity(): StoredCity {
    const randomIndex = Math.floor(Math.random() * this.DEFAULT_CITIES.length);
    return this.DEFAULT_CITIES[randomIndex];
  }
}
