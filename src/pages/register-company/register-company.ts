import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterCompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { ApiCepProvider } from '../../providers/api-cep/api-cep';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register-company',
  templateUrl: 'register-company.html',
})
export class RegisterCompanyPage {

  public registerCompanyForm: any;




  constructor(public navCtrl: NavController, public navParams: NavParams, public apiCepProvider: ApiCepProvider, formBuilder: FormBuilder, private toastCtrl: ToastController) {

    this.registerCompanyForm = formBuilder.group({
      nomeFantasia: ['', Validators.required],
      cnpj: ['', Validators.required],
      email: ['', Validators.required],
      cep: ['', Validators.compose(
        [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
        ])],
      numero: ['', Validators.required],
      logradouro: ['', Validators.required],
      cidade: ['', Validators.required]

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterCompanyPage');
  }

  saveFormCompanyRegister() {
    if (this.registerCompanyForm.valid) {
      //chamar api para salvar 
    } else {
      this.presentToast("Não foi possível salvar o cadastro");
    }
  }

  isEndereco() {

    if (this.registerCompanyForm.value.cep.length == 8) {
      this.apiCepProvider.getEndereco(this.registerCompanyForm.value.cep).then((dataReturn: any) => {
        this.registerCompanyForm.controls.cidade.patchValue(dataReturn.localidade);
      }).catch((erroReturn: any) => {

      });
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }




}
