import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtsChartsComponent } from './qts-charts.component';
import { QtsModule } from './qts.module';
import { QtsService } from './qts.service';

describe('QtsChartsComponent', () => {
  let component: QtsChartsComponent;
  let fixture: ComponentFixture<QtsChartsComponent>;
  let bla: QtsService;
  beforeEach(async(() => {
    //bla = new QtsService();
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [ QtsModule ],
      providers: [ QtsService ]
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
