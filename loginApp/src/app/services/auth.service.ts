import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url= 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apikey='AIzaSyAIF6JYkIeyXT16vUCVKGTTeZ7VEvjQVOA';

  userToken: any;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout(){

  }


login(usuario: UsuarioModel){

    const authData = {
      ...usuario,
      returnSecureToken:true
    };

    return this.http.post(
      `${ this.url}/verifyPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map( resp=> {
        console.log('entro en el mapa de RXJS');
        this.guardarToken( resp['idToken']);
        return resp;
      })
    );
    ;
  }
  nuevoUsuario ( usuario: UsuarioModel){
    const authData={
      ...usuario,
      returnSecureToken:true
    };

    return this.http.post(
      `${ this.url}/signupNewUser?key=${this.apikey}`,
      authData
    ).pipe(
      map( resp=> {
        console.log('entro en el mapa de RXJS');
        this.guardarToken( resp['idToken']);
        return resp;
      })
    );

  }

    private guardarToken(idToken: string){
 this.userToken=idToken;
 localStorage.setItem('token', idToken);

  }

leerToken(){

  if ( localStorage.getItem('token')) {
    this.userToken=localStorage.getItem('token');
  } else{
    this.userToken='';
  }
  return this.userToken;
}


}





