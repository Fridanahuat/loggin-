import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url= 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';



  constructor(private http: HttpClient) { }

  logout(){

  }

  login(usuario: UsuarioModel){

  }

  nuevoUsuario(usuario: UsuarioModel){

    const authData = {
      ...usuario,
      returnSecureToken:true
    };

    return this.http.post(
      `${ this.url}/signupNewUser?key=[API_KEY]`,
      authData
    );
  }

}





