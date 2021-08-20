import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SucursalService } from 'src/app/core/services/sucursal.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CreateSucursalComponent } from 'src/app/pages/sucursal/create/crear-sucursal.component';
import { Sucursal } from 'src/app/interface/sucursal';
import { EditSucursalComponent } from '../edit/edit-sucursal.component';
import { ConfirmDeleteComponent } from 'src/app/shared/confirm-delete/confirm-delete.component';

import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sucursal',
  templateUrl: './listar-sucursal.component.html',
  styleUrls: ['./listar-sucursal.component.scss'],
})
export class ListarSucursalComponent implements OnInit {
  displayedColumns: string[] = ['codigoSucursal', 'nombre', 'createdAt', 'actions'];
  dataSource = new MatTableDataSource(null);

  constructor(
    private sucursalService: SucursalService,
    public matDialog: MatDialog,
    private authService: AuthService,
    private route: Router
  ) {}

  ngAfterViewInit(): void {
    let token = this.authService.getTokenAuth()
    if(!token){
      this.route.navigate(['auth'])
    }
  }
  ngOnInit(): void {
    this.sucursalService.obtenerSucursales().subscribe((sucursales) => {
      this.dataSource = new MatTableDataSource(sucursales);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mostrarDialogo(): void {
    this.matDialog.open(CreateSucursalComponent, {
      width: '320px',
    }).afterClosed().subscribe(valor => {
      this.sucursalService.obtenerSucursales().subscribe((sucursales) => {
        this.dataSource = new MatTableDataSource(sucursales);
      });
    });
  }

  edit(sucursal: Sucursal):void {
    this.matDialog.open(EditSucursalComponent, {
      width: '320px',
      data: sucursal
    }).afterClosed().subscribe(valor => {
      this.sucursalService.obtenerSucursales().subscribe((sucursales) => {
        this.dataSource = new MatTableDataSource(sucursales);
      });
    });
  }

  delete(sucursal: Sucursal):void {
    this.matDialog.open(ConfirmDeleteComponent, {
      width: '320px',
      data: '¿ Seguro que desea eliminar la sucursal ?'
    }).afterClosed().subscribe(value => {
      if (value) {
        this.sucursalService.delete(sucursal.codigoSucursal).subscribe(value => {
          this.sucursalService.obtenerSucursales().subscribe((sucursales) => {
            this.dataSource = new MatTableDataSource(sucursales);
          });
        });
      }
    });
  }
}
