import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEditUserComponent } from './main-edit-user.component';

describe('MainEditUserComponent', () => {
  let component: MainEditUserComponent;
  let fixture: ComponentFixture<MainEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEditUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
