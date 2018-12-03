import { Component, OnInit } from '@angular/core';
import { NavController, IonicPageModule, AlertController } from 'ionic-angular';
import { ApiRequestProvider } from '../../providers/api-request/api-request';
import { UsuarioModel } from '../../model/usuario';

import { Dialogs } from '@ionic-native/dialogs';
import { text } from '@angular/core/src/render3/instructions';


/*Page imports*/


import { RegisterUserPage } from '../register-user/register-user';
import { RegisterCompanyPage } from '../register-company/register-company';
import { RegisterDocPage } from '../register-doc/register-doc';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  loginForm: any;

  constructor(public navCtrl: NavController, private apiRequest: ApiRequestProvider, public alertCtrl: AlertController, formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  //Cadastra empresa
  btnRegister() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Escolha uma opção');

    alert.addInput({
      type: 'radio',
      label: 'Quero um emprego',
      value: 'USER'
    });

    alert.addInput({
      type: 'radio',
      label: 'Quero contratar',
      value: 'PJ-EMPRESA'
    });

    alert.addButton('CANCELAR');

    alert.addButton({
      text: 'OK',
      handler: data => {
        switch (data) {
          case 'USER':
            this.navCtrl.push(RegisterUserPage);
            break;
          case 'PJ-EMPRESA':
            this.navCtrl.push(RegisterCompanyPage);
            break;
        }
      }
    });
    alert.present();
  }

  btnLogin() {

  }


}
