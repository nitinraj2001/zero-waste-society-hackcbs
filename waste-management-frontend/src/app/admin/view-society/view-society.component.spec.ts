import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSocietyComponent } from './view-society.component';

describe('ViewSocietyComponent', () => {
  let component: ViewSocietyComponent;
  let fixture: ComponentFixture<ViewSocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSocietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
