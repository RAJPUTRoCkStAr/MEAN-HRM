import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isAdmin: any

  constructor(private router: Router, private LoginService: LoginService) {

    this.LoginService.userRole().subscribe((res: any) => {
      this.isAdmin = res.isAdmin
      console.log(this.isAdmin)
    })
  }

  logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('role')
    this.router.navigate(["/login"])
  }
}
