import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMuncipalityComponent } from './register-muncipality.component';

describe('RegisterMuncipalityComponent', () => {
  let component: RegisterMuncipalityComponent;
  let fixture: ComponentFixture<RegisterMuncipalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMuncipalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMuncipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
