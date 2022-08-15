import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso-Angular-REST';

  usuario = {'login': 'felipe', 'senha':'123'};

  public login() {
    console.log("Teste Login : " + this.usuario.login + this.usuario.senha);
  }

}
