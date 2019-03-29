import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotacioncComponent } from './dotacionc.component';

describe('DotacioncComponent', () => {
  let component: DotacioncComponent;
  let fixture: ComponentFixture<DotacioncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotacioncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotacioncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
