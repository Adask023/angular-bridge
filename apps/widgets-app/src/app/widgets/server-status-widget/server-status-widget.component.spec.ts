import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerStatusWidgetComponent } from './server-status-widget.component';

describe('ServerStatusWidgetComponent', () => {
  let component: ServerStatusWidgetComponent;
  let fixture: ComponentFixture<ServerStatusWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerStatusWidgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServerStatusWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
