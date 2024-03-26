import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { Employee, EmployeeDetails, Hardware, Software } from '../models/employee';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private controller = "projects"
  constructor(private http: HttpClient) { }

  public getEmpByEmail(email: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.apiUrl}/employee/by-email?email=${email}`)
  }

  public getProjectsByEmail(email: any): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.apiUrl}/${this.controller}/by-email?email=${email}`)
  }
}
