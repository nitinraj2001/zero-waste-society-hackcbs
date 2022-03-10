import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWasteComponent } from './view-waste.component';

describe('ViewWasteComponent', () => {
  let component: ViewWasteComponent;
  let fixture: ComponentFixture<ViewWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
