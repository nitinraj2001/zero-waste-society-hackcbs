import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUploadedWasteComponent } from './view-uploaded-waste.component';

describe('ViewUploadedWasteComponent', () => {
  let component: ViewUploadedWasteComponent;
  let fixture: ComponentFixture<ViewUploadedWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUploadedWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUploadedWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
