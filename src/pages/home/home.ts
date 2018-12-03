import { Component, OnInit } from '@angular/core';
import { NavController, IonicPageModule, AlertController   } from 'ionic-angular';
import { ApiRequestProvider } from '../../providers/api-request/api-request';
import { UsuarioModel } from '../../model/usuario';

import { Dialogs } from '@ionic-native/dialogs';
import { text } from '@angular/core/src/render3/instructions';


/*Page imports*/


import { RegisterUserPage } from '../register-user/register-user';
import { RegisterCompanyPage } from '../register-company/register-company';
import { RegisterDocPage } from '../register-doc/register-doc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, private apiRequest: ApiRequestProvider, public alertCtrl: AlertController ) {

  }

  private email: string;
  private senha: string;


  valuesController:any;

  ngOnInit() {
      /*
    this.apiRequest.consumirAPI().then((dataReturn:any) => {
      console.log(dataReturn);
    
      this.valuesController = dataReturn[0];
       let objUsuario = new UsuarioModel();

       objUsuario.id = 2; 
       objUsuario.nome = "teste";
       objUsuario.sobrenome = "teste delicia";
       objUsuario.cpf = "123456";
       objUsuario.rg = "123456789";
       objUsuario.email = "teste@teste.com";
       objUsuario.telefone = "99999999999";

       this.apiRequest.enviarCadastroUsuario(objUsuario);
     
    });
 */
  }


  btnGoToRegisterCompanyPage(UserType){
    
  }

  //Cadastra empresa
  btnRegister(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Em qual destas opções você se encaixa ?');

    alert.addInput({
      type: 'radio',
      label: 'Pessoa Juridica',
      value: 'PJ',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Pessoa Fisica',
      value: 'PF'
    });

    alert.addButton('CANCELAR');
    
    alert.addButton({
      text: 'OK',
      handler: data => {
        switch(data){
          case 'PJ':
            this.navCtrl.push(RegisterCompanyPage);
          break;
          case 'PF':
            this.navCtrl.push(RegisterUserPage);
          break;
        }
      }
    });
    alert.present();
  }

 

  //Cadastra documentos
  btnGoToRegisterDocPage(UserType){
    //Redireciona para página de cadastro de documentos
    this.navCtrl.setRoot(RegisterDocPage);
  }

  //Efetua login
  btnLogin(){
    console.log(this.email);
    console.log(this.senha);
  }

 


 
  



  
  

}
