import { Producto } from './../../../interface/producto';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductoService } from 'src/app/core/services/producto.service';
import { environment } from 'src/environments/environment';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.scss']
})
export class EditProductoComponent implements OnInit {

  formEditProduct: FormGroup;
  productoUpdate: Producto;
  constructor(private fb: FormBuilder,
    private productService: ProductoService,
    public dialogRef: MatDialogRef<EditProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idProducto: number}) { }

  ngOnInit(): void {
    this.formEditProduct = this.fb.group({
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

    this.obtenerProducto(this.data.idProducto);
  }


  obtenerProducto(idProducto: number){
    this.productService.obtenerProducto(idProducto).subscribe( (producto: Producto) => {
      console.log(producto)
      this.formEditProduct.get('nombreProducto').setValue(producto.nombreProducto);
      this.formEditProduct.get('precio').setValue(producto.precio);
      this.productoUpdate = producto;
      this.productoUpdate.imagePath = (producto.imagePath) ? `${environment.apiUrl}/productos/viewFile/${this.productoUpdate.imagePath}` : 'assets/images/producto-determinado.jpg';
    })
  }
}
