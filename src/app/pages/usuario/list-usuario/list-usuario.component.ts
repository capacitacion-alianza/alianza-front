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

  constructor(
    private matDialog: MatDialog,
    private authService: AuthService,
    private route: Router
  ) {
  }
  ngAfterViewInit(): void {
    let token = this.authService.getTokenAuth()
    if(!token){
      this.route.navigate(['auth'])
    }
  }
  addUser() {
    this.matDialog.open(CreateUsuarioComponent, {
      width: '480px'
    });
  }

}
