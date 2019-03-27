import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEventosComponent } from './componente-eventos.component';

describe('ComponenteEventosComponent', () => {
  let component: ComponenteEventosComponent;
  let fixture: ComponentFixture<ComponenteEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
