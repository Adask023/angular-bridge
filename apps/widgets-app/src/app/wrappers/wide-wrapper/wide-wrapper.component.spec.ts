import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideWrapperComponent } from './wide-wrapper.component';

describe('WideWrapperComponent', () => {
  let component: WideWrapperComponent;
  let fixture: ComponentFixture<WideWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WideWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WideWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
