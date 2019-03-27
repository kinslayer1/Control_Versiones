import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteArreglosComponent } from './componente-arreglos.component';

describe('ComponenteArreglosComponent', () => {
  let component: ComponenteArreglosComponent;
  let fixture: ComponentFixture<ComponenteArreglosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteArreglosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteArreglosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
