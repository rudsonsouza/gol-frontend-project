import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVehicleComponent } from './list-vehicle.component';

describe('ListVehicleComponent', () => {
  let component: ListVehicleComponent;
  let fixture: ComponentFixture<ListVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
