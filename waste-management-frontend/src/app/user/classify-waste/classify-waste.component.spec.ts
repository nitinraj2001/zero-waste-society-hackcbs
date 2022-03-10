import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifyWasteComponent } from './classify-waste.component';

describe('ClassifyWasteComponent', () => {
  let component: ClassifyWasteComponent;
  let fixture: ComponentFixture<ClassifyWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifyWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifyWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
