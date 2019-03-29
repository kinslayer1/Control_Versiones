import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OferdemaComponent } from './oferdema.component';

describe('OferdemaComponent', () => {
  let component: OferdemaComponent;
  let fixture: ComponentFixture<OferdemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OferdemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OferdemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
