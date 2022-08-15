import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartcomponent } from './Cart.component';

describe('CartComponent', () => {
  let component: Cartcomponent;
  let fixture: ComponentFixture<Cartcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cartcomponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cartcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});