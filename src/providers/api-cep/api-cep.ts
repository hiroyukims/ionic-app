import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiCepProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiCepProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiCepProvider Provider');
  }

  getEndereco(cep){
    return new Promise((resolve, reject) => {
      this.http.get('https://viacep.com.br/ws/'+cep+'/json/').toPromise().then((data)=> {
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    }) 
  }


}
