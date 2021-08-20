import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';
import { ListarSucursalComponent } from './sucursal/list/listar-sucursal.component';
import { ListProductoComponent } from './producto/list-producto/list-producto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    component: ListUsuarioComponent
  },
  {
    path: 'sucursales',
    component: ListarSucursalComponent
  },
  {
    path: 'productos',
    component: ListProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
