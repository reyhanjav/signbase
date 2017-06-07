import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeedtestPage } from './speedtest';

@NgModule({
  declarations: [
    SpeedtestPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeedtestPage),
  ],
  exports: [
    SpeedtestPage
  ]
})
export class SpeedtestPageModule {}
