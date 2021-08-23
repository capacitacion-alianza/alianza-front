import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endPoint = `${environment.apiUrl}/oauth/token`;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = `scope=read&grant_type=password&username=${username}&password=${password}`;
    let headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers = headers.append('Authorization', 'Basic ' + btoa('alianza' + ':' + 'alianza'));
    return this.http.post<any>(this.endPoint, body, {headers});
  }

  saveToken(token: string, timeexpired: number){
    localStorage.setItem("token-alianza", token);
    localStorage.setItem("timeexpired", timeexpired.toString());
  }

  getTokenAuth() {
    return localStorage.getItem("token-alianza")
  }

  logout(){
    localStorage.clear()
  }

}
