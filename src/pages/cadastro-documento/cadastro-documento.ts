import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { HomePage } from '../home/home';

/**
 * Generated class for the CadastroDocumentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-documento',
  templateUrl: 'cadastro-documento.html',
  providers: [[Camera]]
})
export class CadastroDocumentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }


  tiraFotoDocumento(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroDocumentoPage');
  }

  paginaHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
