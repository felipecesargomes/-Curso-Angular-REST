import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Curso-Angular-REST';

  teste : any = 'primeiro';

  constructor(private router: Router) {

  }

  ngOnInit(): void {

    if(localStorage.getItem('token')==null) {
      console.log('ok');
      this.router.navigate(['login']);
    } else if(this.teste == 'primeiro' ) {
      this.router.navigate(['usuarioList']);
      this.teste = 'segundo';
    }

  }

  public sair() {
    localStorage.clear();
    this.router.navigate(['login']);
  }


}
