import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilChangeServiceComponent } from './oil-change-service.component';

describe('OilChangeServiceComponent', () => {
  let component: OilChangeServiceComponent;
  let fixture: ComponentFixture<OilChangeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OilChangeServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OilChangeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
