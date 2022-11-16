import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PireadingChartComponent } from './pireading-chart.component';

describe('PireadingChartComponent', () => {
  let component: PireadingChartComponent;
  let fixture: ComponentFixture<PireadingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PireadingChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PireadingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
