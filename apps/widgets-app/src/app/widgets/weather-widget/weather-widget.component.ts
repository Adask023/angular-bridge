import { Component, Input, OnInit } from '@angular/core';
import { ApiHttpService } from '../../services/api-http.service';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'stores-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: WeatherWidgetComponent,
    },
  ],
})
export class WeatherWidgetComponent implements Widget, OnInit {
  constructor(private apihttp: ApiHttpService) {}

  public isRefreshing: boolean = false;
  public cityInfo: any;
  public enable: boolean = true

  @Input() cityName: string = 'London';

  ngOnInit() {
    this.load();
  }

  load() {
    this.refresh();
  }

  enableDisable () {
    this.enable ? this.enable = false : this.enable = true
  }

  refresh() {
    this.isRefreshing = true;
    this.apihttp.get(this.cityName).subscribe((data) => {
      this.cityInfo = data;
      console.log(this.cityInfo)
      this.isRefreshing = false;
    });
  }

  ngOnDestroy() {}
}
