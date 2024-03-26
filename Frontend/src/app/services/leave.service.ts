import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { Leaves } from '../models/leaves';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private controller = "lwfh";
  constructor(private http: HttpClient) { };

  public getLeavesByEmail(email: any): Observable<Leaves[]> {
    return this.http.get<Leaves[]>(`${environment.apiUrl}/${this.controller}/list-by-employee?Email=${email}`)
  }

  public getLeaveByStatus(): Observable<Leaves[]> {
    return this.http.get<Leaves[]>(`${environment.apiUrl}/${this.controller}/list-by-status?Status=Pending`)
  }

  public getLeaves(): Observable<Leaves[]> {
    return this.http.get<Leaves[]>(`${environment.apiUrl}/${this.controller}/all`)
  }

  public applyLeave(leaveObj: any) {
    return this.http.post(`${environment.apiUrl}/${this.controller}/request`, leaveObj)
  }

  public approve(id: string) {
    this.http.put(`${environment.apiUrl}/${this.controller}/update-status?id=${id}&Status=Aproved`, {})
      .subscribe((res) => {
        console.log(res)
      })
  }

  public reject(id: string) {
    this.http.put(`${environment.apiUrl}/${this.controller}/update-status?id=${id}&Status=Rejected`, {})
      .subscribe((res) => {
        console.log(res)
      })
  }
}
