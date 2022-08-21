import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private loginService: LoginServiceService) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  
  usuario = {'login': 'felipe', 'senha':'123'};


  public login() {
    this.loginService.login(this.usuario);
  }


}
