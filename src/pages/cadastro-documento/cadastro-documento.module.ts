import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroDocumentoPage } from './cadastro-documento';

@NgModule({
  declarations: [
    CadastroDocumentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroDocumentoPage),
  ],
})
export class CadastroDocumentoPageModule {}
