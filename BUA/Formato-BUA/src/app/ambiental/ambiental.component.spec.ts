import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientalComponent } from './ambiental.component';

describe('AmbientalComponent', () => {
  let component: AmbientalComponent;
  let fixture: ComponentFixture<AmbientalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbientalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
