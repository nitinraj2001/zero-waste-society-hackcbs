import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSocietiesComponent } from './view-societies.component';

describe('ViewSocietiesComponent', () => {
  let component: ViewSocietiesComponent;
  let fixture: ComponentFixture<ViewSocietiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSocietiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSocietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
