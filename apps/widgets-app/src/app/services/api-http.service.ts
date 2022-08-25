import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiHttpService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  token: string = '055de2c97b907e61d16e4bed4297c2d0';

  public get(cityName: string, options?: any) {
    const url = `${this.baseUrl}?q=${cityName}&appid=${this.token}&units=metric&lang=pl`;
    return this.http.get(url, options);
  }
}
