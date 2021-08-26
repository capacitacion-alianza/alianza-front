import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {

    this.formulario = this.fb.group({
      username: [],
      password: []
    });

  }
  ngAfterViewInit() {
    let token = this.auth.getTokenAuth()
    if(token){
      this.router.navigate(['dashboard/productos'])
      return
    }
  }

  login() {
    const value = this.formulario.value;
    this.auth.login(value.username, value.password).subscribe(resp => {
      this.auth.saveToken(resp.access_token, resp.expires_in)
      this.router.navigate(['dashboard'])
    });
  }

}
