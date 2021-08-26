import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUsuarioComponent } from '../create-usuario/create-usuario.component';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent {

  testForm: FormGroup;
  constructor(
    private matDialog: MatDialog,
    private authService: AuthService,
    private route: Router,
    private fb: FormBuilder
  ) {
  }


  ngAfterViewInit(): void {
    let token = this.authService.getTokenAuth()
    if(!token){
      this.route.navigate(['auth'])
    }
  }

  ngOnInit() {
    this.testForm = this.fb.group({
      id: [null],
      Name: [null, Validators.required],
      Age: [null, Validators.required]
    });
  }

  addUser() {
    this.matDialog.open(CreateUsuarioComponent, {
      width: '480px'
    });
  }

  hasChange(){
    if(!this.testForm.get('id').value){
      return true;
    }
    return false;
  }
}
