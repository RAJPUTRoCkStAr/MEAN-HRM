import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LeaveComponent } from './components/leave/leave.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';
import { HrdashboardComponent } from './components/hrdashboard/hrdashboard.component';
import { LeaveManageComponent } from './components/leave-manage/leave-manage.component';
import { EmployeeManageComponent } from './components/employee-manage/employee-manage.component';
import { FormsModule } from '@angular/forms';
import { PayrollComponent } from './components/payroll/payroll.component';
import { ProjectManageComponent } from './components/project-manage/project-manage.component';
import { ResourceManageComponent } from './components/resource-manage/resource-manage.component';
import { NgbDateAdapter, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomAdapter, CustomDateParserFormatter } from './models/custom-date-format';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeaveComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent,
    NewsComponent,
    LoginComponent,
    HrdashboardComponent,
    LeaveManageComponent,
    EmployeeManageComponent,
    PayrollComponent,
    ProjectManageComponent,
    ResourceManageComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NgbDateAdapter, useClass: CustomAdapter },
  { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }],
  bootstrap: [AppComponent]
})
export class AppModule { }
