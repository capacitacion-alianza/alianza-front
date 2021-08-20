import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SucursalService } from 'src/app/core/services/sucursal.service';
import { Sucursal } from 'src/app/interface/sucursal';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-sucursal.component.html',
  styleUrls: ['./edit-sucursal.component.scss']
})
export class EditSucursalComponent{


  sucursalNgModel = null;
  msgError = null;
  errorBoolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public suc: Sucursal,
    private sucursalService: SucursalService,
    public dialogRef: MatDialogRef<EditSucursalComponent>,
    ) {
    this.sucursalService.findById(suc.codigoSucursal).subscribe(sucursal => {
      this.sucursalNgModel = sucursal.nombre;
    });
  }

  editarSucursal(): void {
    const sucursalAEditar: Sucursal = {
      nombre: this.sucursalNgModel
    };

    this.sucursalService.update(this.suc.codigoSucursal, sucursalAEditar).subscribe(sucursal => {
      this.dialogRef.close(sucursal);
    });
  }

}
