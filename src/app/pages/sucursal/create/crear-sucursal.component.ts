import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SucursalService } from 'src/app/core/services/sucursal.service';
import { Sucursal } from 'src/app/interface/sucursal';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.scss']
})
export class CreateSucursalComponent {

  sucursal = null;
  msgError = null;
  errorBoolean = false;

  constructor(
    private sucursalService: SucursalService,
    public dialogRef: MatDialogRef<CreateSucursalComponent>,
    private snackBar: MatSnackBar
    ) { }

  guardarSucursal(): void {

    if (this.sucursal === '' || !this.sucursal) {
      this.snackBar.open('Ingrese una sucursal', 'OK', {
        horizontalPosition: 'center',
        duration: 1000
      });
      return;
    }

    const sucursalSaved: Sucursal = {
      nombre: this.sucursal
    };

    this.sucursalService.insert(sucursalSaved).subscribe(
      sucursal => {
        this.dialogRef.close(sucursal);
      },
      (err: HttpErrorResponse) => {
        this.snackBar.open('Ocurrio un error al guardar la sucursal', 'OK', {
          horizontalPosition: 'center',
          duration: 1000
        });

        this.msgError = err.error.message;
        this.errorBoolean = true;
      }
    );
  }

}
