import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddEditUserComponent } from './form-add-edit-user.component';

describe('FormAddEditUserComponent', () => {
  let component: FormAddEditUserComponent;
  let fixture: ComponentFixture<FormAddEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddEditUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
