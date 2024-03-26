import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { Employee, Hardware, Software, Resource, EmployeeDetails } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';
import { Salary } from 'src/app/models/salary';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  title = 'HRMSApp.UI';
  constructor(private ProfileService: ProfileService,
    private EmployeeService: EmployeeService,
    private ResourceService: ResourceService) { }

  employees: Employee[] = []
  employeeDetails: EmployeeDetails[] = []
  softwares: Software[] = []
  hardwares: Hardware[] = []
  projects: Project[] = []
  resources: Resource[] = []
  empSal: Salary[] = []
  basicSal = ""
  
  FirstName = ""
  LastName = ""
  PhoneNo = ""
  Address = ""
  Designation = ""
  StartDate = ""

  email = localStorage.getItem('email')

  ngOnInit() {
    const project = this.ProfileService.getProjectsByEmail(this.email).pipe(map((result: Project[]) => (this.projects = result)));
    const software = this.ResourceService.getSoftwareByEmail(this.email).pipe(map((result: Software[]) => (this.softwares = result)));
    const hardware = this.ResourceService.getHardwareByEmail(this.email).pipe(map((result: Hardware[]) => (this.hardwares = result)));
    const salary = this.EmployeeService.getEmp(this.email).pipe(map((res: any) => {
      this.empSal = res.employee.SalaryForMonth
      this.basicSal = res.employee.BasicSalary

      this.FirstName = res.employee.FirstName;
      this.LastName = res.employee.LastName;
      this.PhoneNo = res.employee.PhoneNumber;
      this.Address = res.employee.Address;
      this.Designation = res.employee.Designation;
      this.StartDate = res.employee.EmpStartDate;
    }));

    forkJoin([project, software, hardware, salary]).subscribe(() => { });
  }
}
