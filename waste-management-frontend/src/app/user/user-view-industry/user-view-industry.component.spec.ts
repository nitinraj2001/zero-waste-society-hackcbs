import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewIndustryComponent } from './user-view-industry.component';

describe('UserViewIndustryComponent', () => {
  let component: UserViewIndustryComponent;
  let fixture: ComponentFixture<UserViewIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
