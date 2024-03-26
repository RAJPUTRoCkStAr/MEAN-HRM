import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Projects } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  private controller = "projects";

  public getAllProjects() {
    return this.http.get<Projects[]>(`${environment.apiUrl}/${this.controller}/all`)
  }

  public createProject(projObj: any) {
    return this.http.post(`${environment.apiUrl}/${this.controller}/add`, projObj)
      .subscribe((res) => {
        console.log(res)
      })
  }
}
