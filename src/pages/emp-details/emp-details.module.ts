import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpDetailsPage } from './emp-details';

@NgModule({
  declarations: [
    EmpDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpDetailsPage),
  ],
})
export class EmpDetailsPageModule {}
