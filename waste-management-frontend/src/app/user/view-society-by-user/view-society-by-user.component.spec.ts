import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSocietyByUserComponent } from './view-society-by-user.component';

describe('ViewSocietyByUserComponent', () => {
  let component: ViewSocietyByUserComponent;
  let fixture: ComponentFixture<ViewSocietyByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSocietyByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSocietyByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
