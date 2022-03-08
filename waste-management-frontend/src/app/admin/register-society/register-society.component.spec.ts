import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSocietyComponent } from './register-society.component';

describe('RegisterSocietyComponent', () => {
  let component: RegisterSocietyComponent;
  let fixture: ComponentFixture<RegisterSocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSocietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
