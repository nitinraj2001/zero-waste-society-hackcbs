import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPickupScheduleComponent } from './view-pickup-schedule.component';

describe('ViewPickupScheduleComponent', () => {
  let component: ViewPickupScheduleComponent;
  let fixture: ComponentFixture<ViewPickupScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPickupScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPickupScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
