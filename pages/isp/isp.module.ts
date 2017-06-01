import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ispPage } from './isp';

@NgModule({
  declarations: [
    ispPage,
  ],
  imports: [
    IonicPageModule.forChild(ispPage),
  ],
  exports: [
    ispPage
  ]
})
export class ispPageModule {}
