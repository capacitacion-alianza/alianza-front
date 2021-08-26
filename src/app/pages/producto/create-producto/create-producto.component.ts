import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Producto } from 'src/app/interface/producto';
import { ProductoService } from 'src/app/core/services/producto.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.scss'],
})
export class CreateProductoComponent {
  miFormulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductoService,
    public dialogRef: MatDialogRef<CreateProductoComponent>
  ) {
    this.miFormulario = this.fb.group({
      nombreProducto: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(7),
        ],
      }),
      precio: [
        null,
        [Validators.required, Validators.min(10), Validators.max(50)],
      ],
      imagen: [
        null
      ]
    });
  }

  saveProduct() {
    console.log(this.miFormulario.value)
    const form = new FormData();
    form.append('id', String(1));
    form.append('file', this.miFormulario.value.imagen._files[0])
    /*if (this.miFormulario.invalid) {
      return;
    }

    const producto: Producto = this.miFormulario.value;

    this.productService.insert(producto).subscribe(
      (producto: Producto) => {
        this.dialogRef.close(true);
      },
      (err: HttpErrorResponse) => {
        this.dialogRef.close(false);
      }
    );*/
  }
}
