import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWasteComponent } from './manage-waste.component';

describe('ManageWasteComponent', () => {
  let component: ManageWasteComponent;
  let fixture: ComponentFixture<ManageWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
