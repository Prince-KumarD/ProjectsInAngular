import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetcardComponent } from './greetcard.component';

describe('GreetcardComponent', () => {
  let component: GreetcardComponent;
  let fixture: ComponentFixture<GreetcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
