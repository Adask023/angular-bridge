import { Component, ContentChild, OnInit } from '@angular/core';
import { Widget } from '../../widgets/widget.interface';
import { WIDGET } from '../../widgets/widget.token';

@Component({
  selector: 'stores-wide-wrapper',
  templateUrl: './wide-wrapper.component.html',
  styleUrls: ['./wide-wrapper.component.scss'],
})
export class WideWrapperComponent implements OnInit {

  constructor() {

  }

  @ContentChild(WIDGET)
  widget: Widget;

  ngOnInit(): void {}

  onRefresh() {
    console.log('wrapper refresh');
    this.widget.refresh();
  }
}
