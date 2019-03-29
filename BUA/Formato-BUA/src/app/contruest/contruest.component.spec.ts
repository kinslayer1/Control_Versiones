import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContruestComponent } from './contruest.component';

describe('ContruestComponent', () => {
  let component: ContruestComponent;
  let fixture: ComponentFixture<ContruestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContruestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContruestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
