import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  
  usuario = {'login': 'felipe', 'senha':'123'};

  constructor(private loginService: LoginServiceService) {

  }

  public login() {
    this.loginService.login(this.usuario);
  }


}
