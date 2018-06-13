import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtsChartsComponent } from './qts-charts.component';

describe('QtsChartsComponent', () => {
  let component: QtsChartsComponent;
  let fixture: ComponentFixture<QtsChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtsChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
