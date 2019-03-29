import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProphorzComponent } from './prophorz.component';

describe('ProphorzComponent', () => {
  let component: ProphorzComponent;
  let fixture: ComponentFixture<ProphorzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProphorzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProphorzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
