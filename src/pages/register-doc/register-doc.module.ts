import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterDocPage } from './register-doc';

@NgModule({
  declarations: [
    RegisterDocPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterDocPage),
  ],
})
export class RegisterDocPageModule {}
