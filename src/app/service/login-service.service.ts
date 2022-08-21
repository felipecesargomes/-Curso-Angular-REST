import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app-constants';
import { AppComponent } from '../app.component';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) {
  }

  login(usuario:any) {
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {
      
      /* Retorno Http */

      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      localStorage.setItem("token", token);
      console.info("Token: " + localStorage.getItem("token"));
      window.location.reload();

    },
      error => {
        console.error("Erro ao fazer o login ");
        alert('Acesso Negado!');
      }
    );
  }
}