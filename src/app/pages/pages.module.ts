import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PagesRoutingModule } from './pages-routing.module';
import { ListarSucursalComponent } from './sucursal/list/listar-sucursal.component';
import { CreateSucursalComponent } from './sucursal/create/crear-sucursal.component';
import { EditSucursalComponent } from './sucursal/edit/edit-sucursal.component';
import { ListProductoComponent } from './producto/list-producto/list-producto.component';
import { CreateProductoComponent } from './producto/create-producto/create-producto.component';
import { EditProductoComponent } from './producto/edit-producto/edit-producto.component';
import { CreateUsuarioComponent } from './usuario/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './usuario/edit-usuario/edit-usuario.component';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ListarSucursalComponent,
    CreateSucursalComponent,
    EditSucursalComponent,
    ListProductoComponent,
    CreateProductoComponent,
    EditProductoComponent,
    CreateUsuarioComponent,
    EditUsuarioComponent,
    ListUsuarioComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule {}
