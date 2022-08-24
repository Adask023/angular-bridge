import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'stores-server-status-widget',
  templateUrl: './server-status-widget.component.html',
  styleUrls: ['./server-status-widget.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: ServerStatusWidgetComponent,
    },
  ],
})
export class ServerStatusWidgetComponent implements Widget {
  isRefreshing = false;

  load() {
    console.log('Load data to server status widget');
  }

  refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 1000);
  }
}
