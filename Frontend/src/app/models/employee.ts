import { Salary } from "./salary";

export class Employee {
    id?: number;
    FirstName = "";
    LastName = "";
    PhoneNumber = "";
    Address = "";
    Designation = "";
    EmpStartDate = "";
}

export class Software {
    Email = "";
    ResourcesType = "";
    ResourcesName = "";
    Description = "";
    IssuedDate = "";
    Status = "";
}

export class Hardware {
    Email = "";
    ResourcesType = "";
    ResourcesName = "";
    Description = "";
    IssuedDate = "";
    Status = "";
}

export class Projects {
    Email = "";
    ManagerName = "";
    ProjectName = "";
    ProjectDuration = "";
    StartDate = "";
    EndDate = "";
    Status = "";
}

export class Resource {
    Email = "";
    ResourcesType = "";
    ResourcesName = "";
    Description = "";
    IssuedDate = "";
    Status = "";
}

export class Registration {
    Email = "";
    FirstName = "";
    LastName = "";
    PhoneNumber = "";
    Address = "";
    Designation = "";
    EmpStartDate = "";
    BasicSalary!: number;
    AccountNumber = "";
    BankName = "";
    AccHolderName = "";
    BranchName = "";
    Password = ""
}


export class EmployeeDetails{
    BankDetails?: BankDetails[];
    Email = "";
    FirstName = "";
    LastName = "";
    PhoneNumber = "";
    Address = "";
    Designation = "";
    EmpStartDate = "";
    BasicSalary!: number;
    SalaryForMonth?: Salary[];
}

export class BankDetails{
    AccountNumber = "";
    BankName = "";
    AccHolderName = "";
    BranchName = "";
}