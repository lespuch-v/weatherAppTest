import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';
import { map, Observable } from 'rxjs';

interface CityData {
  name: string,
  lat: number,
  lon: number,
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrlCity = 'http://api.openweathermap.org/geo/1.0/direct?q=';
  private apiUrlWeather = 'https://api.openweathermap.org/data/2.5/weather?'
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${environment.apiKey}`);
  }

  private getHttpOptions() {
    return { headers: this.headers };
  }

  getCityData(city: string): Observable<CityData> {
    const url = `${this.apiUrlCity}${city}&appid=${environment.apiKey}`;
    return this.http.get<any[]>(url).pipe(
      map(response => {
        if (response && response.length > 0) {
          const data = response[0];
          return {
            name: data.name,
            lat: data.lat,
            lon: data.lon,
          };
        }
        throw new Error('No data found for the given city');
      })
    );
  }

  getCurrentWeatherForCity(lat: number, lon: number): Observable<any>{
    const url = `${this.apiUrlWeather}lat=${lat}&lon=${lon}&units=metric&appid=${environment.apiKey}`;
    return this.http.get(url);
  }
}

