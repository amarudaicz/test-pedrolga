import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAddUserComponent } from './main-add-user.component';

describe('MainAddUserComponent', () => {
  let component: MainAddUserComponent;
  let fixture: ComponentFixture<MainAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAddUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
