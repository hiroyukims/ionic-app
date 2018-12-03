import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { ApiCepProvider } from '../../providers/api-cep/api-cep';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register-user',
  templateUrl: 'register-user.html',
})
export class RegisterUserPage {

  formularioCadastroUsuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder, public apiCepProvider: ApiCepProvider, private toastCtrl: ToastController) {

    this.formularioCadastroUsuario = formBuilder.group({
      nomeCompleto: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      cep: ['', Validators.required],
      cidade: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      senha: ['', Validators.required],
      confirmaSenha: ['', Validators.required]
    });

  }


  salvarFormularioCadastroUsuario() {
    if (this.formularioCadastroUsuario.valid) {
      //chamar api para salvar 
    } else {
      this.presentToast("Não foi possível salvar o cadastro");
    }
  }

  isEndereco() {

    if (this.formularioCadastroUsuario.value.cep.length == 8) {
      this.apiCepProvider.getEndereco(this.formularioCadastroUsuario.value.cep).then((dataReturn: any) => {
        this.formularioCadastroUsuario.controls.cidade.patchValue(dataReturn.localidade);

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
