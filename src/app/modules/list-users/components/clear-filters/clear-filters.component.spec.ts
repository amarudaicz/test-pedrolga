import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearFiltersComponent } from './clear-filters.component';

describe('ClearFiltersComponent', () => {
  let component: ClearFiltersComponent;
  let fixture: ComponentFixture<ClearFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
