import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnoNovoComponent } from './ano-novo.component';

describe('AnoNovoComponent', () => {
  let component: AnoNovoComponent;
  let fixture: ComponentFixture<AnoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
