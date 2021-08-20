import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarSucursalComponent } from 'src/app/pages/sucursal/list/listar-sucursal.component';
import { ListProductoComponent } from 'src/app/pages/producto/list-producto/list-producto.component';
import { ListUsuarioComponent } from 'src/app/pages/usuario/list-usuario/list-usuario.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
