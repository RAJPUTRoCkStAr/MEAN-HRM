import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private controller = "api"

  public login(loginObj: any) {
    return this.http.post(`https://hrms-web.herokuapp.com/api/auth/signin`, loginObj)
  }

  public userRole(){
    const token: any = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+token)
    return this.http.get(`https://hrms-web.herokuapp.com/api/auth/IsAdmin`, {'headers': headers})
  }
}
