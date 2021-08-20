import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarSucursalComponent } from 'src/app/pages/sucursal/list/listar-sucursal.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EditSucursalComponent } from './pages/sucursal/edit/edit-sucursal.component';
import { CreateSucursalComponent } from './pages/sucursal/create/crear-sucursal.component';
import { CreateProductoComponent } from './pages/producto/create-producto/create-producto.component';
import { EditProductoComponent } from './pages/producto/edit-producto/edit-producto.component';
import { ListProductoComponent } from './pages/producto/list-producto/list-producto.component';
import { ConfirmDeleteComponent } from './shared/confirm-delete/confirm-delete.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateUsuarioComponent } from './pages/usuario/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './pages/usuario/edit-usuario/edit-usuario.component';
import { ListUsuarioComponent } from './pages/usuario/list-usuario/list-usuario.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmDeleteComponent,
    LayoutComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
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
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
