import { Component, ContentChild, OnInit } from '@angular/core';
import { ServerStatusWidgetComponent } from '../../widgets/server-status-widget/server-status-widget.component';
import { Widget } from '../../widgets/widget.interface';
import { WIDGET } from '../../widgets/widget.token';

@Component({
  selector: 'stores-default-wrapper',
  templateUrl: './default-wrapper.component.html',
  styleUrls: ['./default-wrapper.component.scss'],
})
export class DefaultWrapperComponent implements OnInit {
  // OLD
  // @ContentChild(ServerStatusWidgetComponent)
  // widget: ServerStatusWidgetComponent

  // NEW - using bridge design pattern with additional abstract layer
  @ContentChild(WIDGET)
  widget: Widget;

  ngOnInit(): void {}

  onRefresh() {
    console.log('wrapper refresh');
    this.widget.refresh();
  }
}
