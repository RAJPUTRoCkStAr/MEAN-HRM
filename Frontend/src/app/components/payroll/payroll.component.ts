import { Component, Input } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { Employee, EmployeeDetails } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';
import { Salary } from 'src/app/models/salary';
import { EmployeeService } from 'src/app/services/employee.service';
import { PayrollService } from 'src/app/services/payroll.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent {

  constructor(private EmployeeService: EmployeeService,
    private ProjectService: ProfileService,
    private Payroll: PayrollService) { }

  empDetails: Salary[] = []
  projects: Project[] = []
  basicSal = ""
  email = ""


  ngOnInit() {

  }

  formData = {
    Month: "",
    PaidDate: "",
    Email: "",
    AdditionReason: "",
    AddAmount: 0,
    DeductionReason: "",
    DeductAmount: ""
  }

  Search(email: string) {
    this.EmployeeService.getEmp(email)
      .subscribe(
        (res: any) => {
          console.log(res.employee.SalaryForMonth)
          this.empDetails = res.employee.SalaryForMonth
          this.basicSal = res.employee.BasicSalary
        }
      )
  }

  timeOut(){
    setTimeout(() => {
      window.location.reload()
    }, 1500);
  }

  Submit() {
    this.Payroll.addSalary(this.formData)
    alert("Salary Added Successfully!")

    this.timeOut()
  }
}
