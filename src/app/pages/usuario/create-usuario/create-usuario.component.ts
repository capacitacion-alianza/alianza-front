import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Sucursal } from 'src/app/interface/sucursal';
import { SucursalService } from '../../../core/services/sucursal.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interface/usuario';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.scss']
})
export class CreateUsuarioComponent {

  miFormulario: FormGroup;

  misSucursales: Sucursal[] = [];

  misSucursales$: Observable<Sucursal[]>
  
  msgError: string = null;

  isExistUsername = false;

  constructor(
    private fb: FormBuilder,
    private sucursalService: SucursalService,
    private usuarioService: UsuarioService,
    public dialogRef: MatDialogRef<CreateUsuarioComponent>
  ) {

    this.miFormulario = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      username: [null, [Validators.required]],
      clave: [null, [Validators.required]],
      sucursal: [null, [Validators.required]]
    });

    // this.sucursalService.obtenerSucursales().subscribe(sucursales => {
    //   this.misSucursales = sucursales;
    // });

    this.misSucursales$ = this.sucursalService.obtenerSucursales();
   }

   saveUser() {
     const usuario: Usuario = this.miFormulario.value;

     this.usuarioService.insert(usuario).subscribe(
       usuario => {
         this.dialogRef.close(true);
       },
       (error: HttpErrorResponse) => {
         this.msgError = 'Ocurrio un error al insertar el usuario';
       }
     );
   }

   validateUsername(event) {
     this.usuarioService.validateUsername(event.target.value).subscribe(value => {
       this.isExistUsername = value;
     });
   }

}
