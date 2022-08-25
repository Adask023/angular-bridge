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
export class ServerStatusWidgetComponent implements Widget, OnInit {
  public isRefreshing: boolean = false;
  public serverStatus: string = 'offline';
  public enable: boolean = true;

  private statusList: string[] = [
    'online',
    'offline',
    'pending',
    'cant connect',
  ];

  ngOnInit() {
    this.load();
  }

  load() {
    this.refresh();
  }

  enableDisable() {
    this.enable ? (this.enable = false) : (this.enable = true);
  }

  getRandomStatus(): string {
    return this.statusList[Math.floor(Math.random() * this.statusList.length)];
  }

  refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
      this.serverStatus = this.getRandomStatus();
    }, 1000);
  }
}
