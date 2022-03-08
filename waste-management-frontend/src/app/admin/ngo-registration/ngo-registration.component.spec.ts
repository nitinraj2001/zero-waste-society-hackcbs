import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoRegistrationComponent } from './ngo-registration.component';

describe('NgoRegistrationComponent', () => {
  let component: NgoRegistrationComponent;
  let fixture: ComponentFixture<NgoRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
