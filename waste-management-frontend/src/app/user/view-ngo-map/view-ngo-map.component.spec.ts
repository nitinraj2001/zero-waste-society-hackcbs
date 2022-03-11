import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNgoMapComponent } from './view-ngo-map.component';

describe('ViewNgoMapComponent', () => {
  let component: ViewNgoMapComponent;
  let fixture: ComponentFixture<ViewNgoMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNgoMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNgoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
