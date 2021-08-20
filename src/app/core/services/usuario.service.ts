import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interface/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  endPoint = environment.apiUrl + '/usuarios';

  constructor(private httpClient: HttpClient) { }

  insert(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.endPoint, usuario);
  }

  validateUsername(userName: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.endPoint}/validate-username/${userName}`);
  }



}
