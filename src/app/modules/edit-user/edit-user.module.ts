import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEditUserComponent } from './components/main-edit-user/main-edit-user.component';
import { AddUserModule } from '../add-user/add-user.module';



@NgModule({
  declarations: [
    MainEditUserComponent
  ],
  imports: [
    CommonModule,
    AddUserModule
  ]
})
export class EditUserModule { }
