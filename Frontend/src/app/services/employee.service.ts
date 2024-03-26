import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { Employee, EmployeeDetails } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private controller = "employee"
  constructor(private http: HttpClient) { }

  public getEmpByEmail(email: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.controller}/by-email?Email=${email}`)
  }

  public getEmp(email: any) {
    return this.http.get(`https://hrms-web.herokuapp.com/employee/by-email?Email=${email}`)
  }

  public regEmp(empRegObj: any) {
    return this.http.post(`${environment.apiUrl}/${this.controller}/add`, empRegObj)
      .subscribe((res) => {
        console.log(res)
      })
  }

  public updEmp(empUpdObj: any) {
    return this.http.put(`${environment.apiUrl}/${this.controller}/update`, empUpdObj)
      .subscribe((res) => {
        console.log(res)
      })
  }

  public updBank(bankUpdObj: any) {
    return this.http.put(`${environment.apiUrl}/${this.controller}/update-bank-details`, bankUpdObj)
      .subscribe((res) => {
        console.log(res)
      })
  }

  public dltEmp(email: string) {
    return this.http.put(`${environment.apiUrl}/${this.controller}/remove?Email=${email}`, {})
      .subscribe((res) => {
        console.log(res)
      })
  }
}
