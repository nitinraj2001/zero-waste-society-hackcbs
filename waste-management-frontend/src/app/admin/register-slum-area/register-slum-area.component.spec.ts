import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSlumAreaComponent } from './register-slum-area.component';

describe('RegisterSlumAreaComponent', () => {
  let component: RegisterSlumAreaComponent;
  let fixture: ComponentFixture<RegisterSlumAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSlumAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSlumAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
