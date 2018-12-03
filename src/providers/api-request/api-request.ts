import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../../model/usuario';
/*
  Generated class for the ApiRequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiRequestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiRequestProvider Provider');
  }

  consumirAPI(){
    return new Promise((resolve, reject) => {
      this.http.get('https://localhost:5001/api/usuario').toPromise().then((data)=> {
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    }) 
  }

  enviarCadastroUsuario(usuario: UsuarioModel){
    return new Promise((resolve, reject) => {
      this.http.post('https://localhost:5001/api/usuario', usuario).toPromise().then((data)=> {
        resolve(data);
        console.log(data);
      }).catch((error) => {
        reject(error);
      });
    }) 
  }


}
