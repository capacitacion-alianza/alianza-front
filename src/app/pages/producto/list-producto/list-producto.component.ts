import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from 'src/app/core/services/producto.service';
import { Producto } from 'src/app/interface/producto';
import { CreateProductoComponent } from 'src/app/pages/producto/create-producto/create-producto.component';

import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.scss']
})
export class ListProductoComponent {

  displayedColumns: string[] = ['codigoProducto', 'nombreProducto', 'precio', 'actions'];
  dataSource = new MatTableDataSource(null);

  constructor(
    private productoService: ProductoService,
    public matDialog: MatDialog,
    private authService: AuthService,
    private route: Router
  ) {

  }
  ngAfterViewInit(): void {
    let token = this.authService.getTokenAuth()
    if(!token){
      this.route.navigate(['auth'])
      return
    }
    this.listarProductos();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listarProductos() {
    this.productoService.listarProductos().subscribe(productos => {
      this.dataSource = new MatTableDataSource(productos);
    });
  }

  addProduct() {
    this.matDialog.open(CreateProductoComponent, {
      width: '480px'
    }).afterClosed().subscribe(value => {
      if(value === true) {
        this.listarProductos();
      }
    });
  }

  edit(producto: Producto): void {
    alert(JSON.stringify(producto));
  }

  delete(): void {
    alert('DELETED');
  }

}
