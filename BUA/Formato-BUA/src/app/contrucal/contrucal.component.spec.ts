import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrucalComponent } from './contrucal.component';

describe('ContrucalComponent', () => {
  let component: ContrucalComponent;
  let fixture: ComponentFixture<ContrucalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContrucalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrucalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
