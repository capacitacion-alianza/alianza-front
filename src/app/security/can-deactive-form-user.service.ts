import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ListUsuarioComponent } from '../pages/usuario/list-usuario/list-usuario.component'
@Injectable({
  providedIn: 'root'
})
export class CanDeactiveFormUserService implements CanDeactivate<ListUsuarioComponent>{

  constructor() { }
  canDeactivate(component: ListUsuarioComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot){

    console.log('Voy a salir del formulario')
    if(component.hasChange()){
      return window.confirm('Tiene Cambios sin guardar, ¿Desea Salir?');
    }
    return true;
  }
}
