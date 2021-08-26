import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Taller';
  public rutasMenu;
  public viewMenu = false;

  constructor(private authService: AuthService) {

    this.rutasMenu = [
      {
        path: '/dashboard/usuarios',
        name: 'Usuarios'
      },
      {
        path: '/dashboard/sucursales',
        name: 'Sucursales'
      },
      {
        path: '/dashboard/productos',
        name: 'Productos'
      }
    ]
  }

  ngOnInit() {
    const token = this.authService.getTokenAuth();
    if(token){
      this.viewMenu = true
    }
  }

}

