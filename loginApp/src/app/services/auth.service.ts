import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url= 'https://identitytoolkit.googleapis.com/v1/accounts:'
private apikey= 'AIzaSyCj61t5NunynZ2URVmdT1QnL77U0NKyj8c'


  constructor(private http: HttpClient) { }

  logout(){

  }

  login(usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken:true
    };
  }

  nuevoUsuario(usuario: UsuarioModel){

    const authData = {
      ...usuario,
      returnSecureToken:true
    };

    return this.http.post(
      `${ this.url}/verifyPassword?key=${this.apikey}`,
      authData
    );

    return this.http.post(
      `${ this.url}/signupNewUser?key=${this.apikey}`,
      authData
    );
  }

}





