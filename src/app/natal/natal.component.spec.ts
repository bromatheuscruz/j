import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatalComponent } from './natal.component';

describe('NatalComponent', () => {
  let component: NatalComponent;
  let fixture: ComponentFixture<NatalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
