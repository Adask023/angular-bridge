import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultWrapperComponent } from './wrappers/default-wrapper/default-wrapper.component';
import { WideWrapperComponent } from './wrappers/wide-wrapper/wide-wrapper.component';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { ServerStatusWidgetComponent } from './widgets/server-status-widget/server-status-widget.component';
import { ApiHttpService } from './services/api-http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DefaultWrapperComponent,
    WideWrapperComponent,
    WeatherWidgetComponent,
    ServerStatusWidgetComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApiHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
