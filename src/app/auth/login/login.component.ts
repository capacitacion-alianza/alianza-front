import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {

    this.formulario = this.fb.group({
      username: [],
      password: []
    });

  }

  login() {
    const value = this.formulario.value;
    this.auth.login(value.username, value.password).subscribe(resp => {
      console.log(resp);
      this.auth.saveToken(resp.access_token)
    });
  }

}
