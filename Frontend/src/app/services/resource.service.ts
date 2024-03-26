import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { Hardware, Resource, Software } from '../models/employee';
import { AllHardware, AllSoftware } from '../models/resource';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) { }

  private controller = "resouces";

  public getAllResources(){
    return this.http.get<Resource[]>(`${environment.apiUrl}/${this.controller}/all`)
  }

  public getSoftwareResources(){
    return this.http.get<AllSoftware[]>(`${environment.apiUrl}/${this.controller}/software/all`)
  }

  public getHardwareResource(){
    return this.http.get<AllHardware[]>(`${environment.apiUrl}/${this.controller}/hardware/all`)
  }
  
  public getSoftwareByEmail(email: any): Observable<Software[]> {
    return this.http.get<Software[]>(`${environment.apiUrl}/${this.controller}/software/by-email?email=${email}`)
  }

  public getHardwareByEmail(email: any): Observable<Hardware[]> {
    return this.http.get<Hardware[]>(`${environment.apiUrl}/${this.controller}/hardware/by-email?email=${email}`)
  }

  public createResource(resourceObj: any){
    return this.http.post(`${environment.apiUrl}/${this.controller}/add`, resourceObj)
    .subscribe((res) => {
      console.log(res)
    })
  }
}
