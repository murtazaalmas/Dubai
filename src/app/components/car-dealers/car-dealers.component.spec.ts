import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDealersComponent } from './car-dealers.component';

describe('CarDealersComponent', () => {
  let component: CarDealersComponent;
  let fixture: ComponentFixture<CarDealersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDealersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
