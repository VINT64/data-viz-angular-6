import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtsComponent } from './qts.component';
import { QtsModule } from './qts.module';

describe('QtsComponent', () => {
  let component: QtsComponent;
  let fixture: ComponentFixture<QtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [ QtsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
