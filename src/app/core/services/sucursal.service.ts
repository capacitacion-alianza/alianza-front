import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal } from 'src/app/interface/sucursal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  endPoint = environment.apiUrl + '/sucursales';

  constructor(private httpClient: HttpClient) { }

  obtenerSucursales(): Observable<Sucursal[]> {
    return this.httpClient.get<Sucursal[]>(this.endPoint);
  }

  insert(sucursal: Sucursal): Observable<Sucursal> {
    return this.httpClient.post<Sucursal>(this.endPoint, sucursal);
  }

  findById(sucursalId: number): Observable<Sucursal> {
    return this.httpClient.get<Sucursal>( `${this.endPoint}/${sucursalId}`);
  }

  update(sucursalId: number, sucursal: Sucursal) {
    return this.httpClient.put(`${this.endPoint}/${sucursalId}`, sucursal);
  }

  delete(sucursalId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.endPoint}/${sucursalId}`);
  }

}
