import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekTableComponent } from './week-table.component';

describe('WeekTableComponent', () => {
  let component: WeekTableComponent;
  let fixture: ComponentFixture<WeekTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
