import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantValuesComponent } from './important-values.component';

describe('ImportantValuesComponent', () => {
  let component: ImportantValuesComponent;
  let fixture: ComponentFixture<ImportantValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
