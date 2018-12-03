import { Component, OnInit } from '@angular/core';
import { NavController, IonicPageModule } from 'ionic-angular';
import { ApiRequestProvider } from '../../providers/api-request/api-request';
import { UsuarioModel } from '../../model/usuario';

import { Dialogs } from '@ionic-native/dialogs';
import { CadastroDocumentoPage } from '../cadastro-documento/cadastro-documento';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, private apiRequest: ApiRequestProvider ) {

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

//https://ionicframework.com/docs/api/components/alert/AlertController/


  cadastraUsuario(){
    this.dialogs.alert("Tipo de usuário")
      .then(() => console.log('aaa'))
      .catch(e => console.log('Error'))
    
  }


  //Leva usuário para página de cadastro
  paginaCadastroDocumento() {
    this.navCtrl.setRoot(CadastroDocumentoPage);
  }

  //Login
  login(){
    console.log(this.email);
    console.log(this.senha);
  }
  


  
  

}
