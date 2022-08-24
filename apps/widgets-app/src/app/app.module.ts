import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultWrapperComponent } from './wrappers/default-wrapper/default-wrapper.component';
import { WideWrapperComponent } from './wrappers/wide-wrapper/wide-wrapper.component';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { ServerStatusWidgetComponent } from './widgets/server-status-widget/server-status-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultWrapperComponent,
    WideWrapperComponent,
    WeatherWidgetComponent,
    ServerStatusWidgetComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
