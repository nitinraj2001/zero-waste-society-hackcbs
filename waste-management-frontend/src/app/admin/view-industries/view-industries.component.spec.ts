import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIndustriesComponent } from './view-industries.component';

describe('ViewIndustriesComponent', () => {
  let component: ViewIndustriesComponent;
  let fixture: ComponentFixture<ViewIndustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIndustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
