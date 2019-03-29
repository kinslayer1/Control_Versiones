import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsinmueblComponent } from './consinmuebl.component';

describe('ConsinmueblComponent', () => {
  let component: ConsinmueblComponent;
  let fixture: ComponentFixture<ConsinmueblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsinmueblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsinmueblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
