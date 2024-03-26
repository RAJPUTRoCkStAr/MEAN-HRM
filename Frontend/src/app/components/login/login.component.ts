import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private LoginService: LoginService, private router: Router) {}

  formGrp = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  formData = {
    email: '',
    password: ''
  }

  Submit(formData: any){
    this.LoginService.login(formData).subscribe((res: any) => {
      localStorage.setItem("token", res.token)
      localStorage.setItem("email", res.user.email)
      localStorage.setItem("role", res.user.userRole)
      this.router.navigate(["/"])
    })
  }
}
