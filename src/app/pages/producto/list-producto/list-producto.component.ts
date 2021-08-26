import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from 'src/app/core/services/producto.service';
import { Producto } from 'src/app/interface/producto';
import { CreateProductoComponent } from 'src/app/pages/producto/create-producto/create-producto.component';
import { EditProductoComponent } from 'src/app/pages/producto/edit-producto/edit-producto.component';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router'
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.scss']
})
export class ListProductoComponent {

  displayedColumns: string[] = ['codigoProducto', 'nombreProducto', 'precio', 'actions'];
  dataSource = new MatTableDataSource(null);
  dataTableSize: number = 5;
  dataTablePage: number = 0;
  dataTableTotalElement: number;
  @ViewChild(MatPaginator) paginator;

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
    this.listarProductos(this.dataTablePage,this.dataTableSize);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listarProductos(page: number, size: number) {
    this.productoService.listarProductosPage(page,size).subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.content);
      this.dataSource.paginator = this.paginator;
      this.dataTableTotalElement = response.totalElements;
      this.dataTableSize = response.size;
      this.dataTablePage = response.page;
    });
  }

  addProduct() {
    this.matDialog.open(CreateProductoComponent, {
      width: '480px'
    }).afterClosed().subscribe(value => {
      if(value === true) {
        this.listarProductos(this.dataTablePage,this.dataTableSize);
      }
    });
  }

  edit(producto: Producto): void {
    console.log(producto)
    this.matDialog.open(EditProductoComponent, {
      width: '480px',
      data: {idProducto: producto.codigoProducto}
    }).afterClosed().subscribe(value => {
      if(value === true) {
        this.listarProductos(this.dataTablePage, this.dataTableSize);
      }
    });
  }

  delete(): void {
    alert('DELETED');
  }

  onChangePaginator(event): void{
    console.log(event)
    this.dataTablePage = event.pageIndex;
    this.dataTableSize  = event.pageSize;
    this.listarProductos(this.dataTablePage,this.dataTableSize)
  }

}
