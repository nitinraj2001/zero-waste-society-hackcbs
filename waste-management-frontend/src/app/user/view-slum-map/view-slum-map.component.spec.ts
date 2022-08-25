import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSlumMapComponent } from './view-slum-map.component';

describe('ViewSlumMapComponent', () => {
  let component: ViewSlumMapComponent;
  let fixture: ComponentFixture<ViewSlumMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSlumMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSlumMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
