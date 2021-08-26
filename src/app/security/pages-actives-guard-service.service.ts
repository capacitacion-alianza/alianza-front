import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PagesActivesGuardServiceService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /*const rutas = [
      'productos',
      'sucursales',
      'usuart'
    ]*/
    const token = this.authService.getTokenAuth();
    if(!token){
      this.router.navigate(['/auth/login']);
      return false;
    }
    /*const url =  route.routeConfig.path;
    console.log(url);
    let isActive = rutas.filter( t => t == url);
    if (isActive.length > 0){
      return true;
    }
    alert('No posee permisos para acceder a la ruta')
    this.router.navigate(['dashboard']);
    return false;*/
    return true;
  }

}
