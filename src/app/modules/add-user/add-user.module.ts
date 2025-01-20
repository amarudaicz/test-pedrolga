import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAddUserComponent } from './components/main-add-user/main-add-user.component';
import { LoaderModule } from '../loader/loader.module';
import { FormAddEditUserComponent } from './components/form-add-edit-user/form-add-edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainAddUserComponent,
    FormAddEditUserComponent
  ],
  imports: [
    CommonModule, LoaderModule, ReactiveFormsModule
  ],
  exports:[
    MainAddUserComponent, FormAddEditUserComponent
  ]
})
export class AddUserModule { }
 