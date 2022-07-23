import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllIndustriesComponent } from './view-all-industries.component';

describe('ViewAllIndustriesComponent', () => {
  let component: ViewAllIndustriesComponent;
  let fixture: ComponentFixture<ViewAllIndustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllIndustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
