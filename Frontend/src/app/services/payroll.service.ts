import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  constructor(private http: HttpClient) { }

  private controller = "employee"

  public addSalary(salObj: any){
    return this.http.put(`${environment.apiUrl}/${this.controller}/add-salary`, salObj).subscribe((res) => {
      console.log(res)
    })
  }
}
