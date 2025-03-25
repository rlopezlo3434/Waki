import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarNumerosComponent } from './car-numeros.component';

describe('CarNumerosComponent', () => {
  let component: CarNumerosComponent;
  let fixture: ComponentFixture<CarNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarNumerosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
