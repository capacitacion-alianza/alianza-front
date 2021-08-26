import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';
import { ListarSucursalComponent } from './sucursal/list/listar-sucursal.component';
import { ListProductoComponent } from './producto/list-producto/list-producto.component';
import { PagesActivesGuardServiceService } from '../security/pages-actives-guard-service.service';
import { CanDeactiveFormUserService } from '../security/can-deactive-form-user.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    component: ListUsuarioComponent,
    canActivate: [PagesActivesGuardServiceService],
    canDeactivate: [CanDeactiveFormUserService]
  },
  {
    path: 'sucursales',
    component: ListarSucursalComponent,
    canActivate: [PagesActivesGuardServiceService]
  },
  {
    path: 'productos',
    component: ListProductoComponent,
    canActivate: [PagesActivesGuardServiceService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
