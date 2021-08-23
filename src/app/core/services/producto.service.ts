import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/interface/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  endPoint = `${environment.apiUrl}/productos`;

  constructor(
    private httpClient: HttpClient
  ) { }


  listarProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.endPoint}/listar-productos`);
  }

  insert(producto: Producto): Observable<Producto> {
    return this.httpClient.post<Producto>(this.endPoint, producto);
  }

}
