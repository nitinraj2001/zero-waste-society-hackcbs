import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNgosComponent } from './view-ngos.component';

describe('ViewNgosComponent', () => {
  let component: ViewNgosComponent;
  let fixture: ComponentFixture<ViewNgosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNgosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
