import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocclinicComponent } from './docclinic.component';

describe('DocclinicComponent', () => {
  let component: DocclinicComponent;
  let fixture: ComponentFixture<DocclinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocclinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocclinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
