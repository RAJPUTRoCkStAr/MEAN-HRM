import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, map } from 'rxjs';
import { Employee, EmployeeDetails, Hardware, Registration, Resource, Software } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { CustomAdapter, CustomDateParserFormatter } from '../employee-manage/datetime-format';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class EmployeeManageComponent {
  @Input() obj: Registration[] = []
  model?: string;

  constructor(private EmployeeService: EmployeeService, private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) {}

  registration: Registration[] = []

  //#region registration
  empReg = new FormGroup({
    Email: new FormControl(''),
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    PhoneNumber: new FormControl(''),
    Address: new FormControl(''),
    Designation: new FormControl(''),
    EmpStartDate: new FormControl(''),
    BasicSalary: new FormControl(),
    AccountNumber: new FormControl(''),
    BankName: new FormControl(''),
    AccHolderName: new FormControl(''),
    BranchName: new FormControl(''),
    Password: new FormControl('')
  })

  regData = {
    Email: '',
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Address: '',
    Designation: '',
    EmpStartDate: '',
    BasicSalary: 0,
    AccountNumber: '',
    BankName: '',
    AccHolderName: '',
    BranchName: '',
    Password: ''
  }
  //#endregion

  //#region user details update
  empUpd = new FormGroup({
    Email: new FormControl(''),
    PhoneNumber: new FormControl(''),
    Designation: new FormControl(''),
    BasicSalary: new FormControl()
  })

  updData = {
    Email: '',
    PhoneNumber: '',
    Address: '',
    Designation: '',
    BasicSalary: 0
  }
  //#endregion

  //#region bank details update
  bankUpd = new FormGroup({
    Email: new FormControl(''),
    AccountNumber: new FormControl(''),
    BankName: new FormControl(''),
    AccHolderName: new FormControl(''),
    BranchName: new FormControl('')
  })

  bankData = {
    Email: '',
    AccountNumber: '',
    BankName: '',
    AccHolderName: '',
    BranchName: ''
  }
  //#endregion

  //#region delete employee
  inputValue = ""
  //#endregion

  empDetails: EmployeeDetails[] = []

  ngOnInit(){
    
  }

  timeOut(){
    setTimeout(() => {
      window.location.reload()
    }, 2500);
  }

  empRegister(regData: any){
    this.EmployeeService.regEmp(regData);
    alert("Employee Registered Successfully!")

    this.timeOut()
  }

  empUpdate(updData: any){
    this.EmployeeService.updEmp(updData)
    alert("Employee Details Updated!")

    this.timeOut()
  }

  bankUpdate(bankData: any){
    this.EmployeeService.updBank(bankData)
    alert("Bank Details Updated!")

    this.timeOut()
  }

  empDelet(email: string){
    this.EmployeeService.dltEmp(email)
    alert("Resignation Successfull!")

    this.timeOut()
  }
}
