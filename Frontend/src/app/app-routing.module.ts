import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeManageComponent } from './components/employee-manage/employee-manage.component';
import { HrdashboardComponent } from './components/hrdashboard/hrdashboard.component';
import { LeaveManageComponent } from './components/leave-manage/leave-manage.component';
import { LeaveComponent } from './components/leave/leave.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectManageComponent } from './components/project-manage/project-manage.component';
import { ResourceManageComponent } from './components/resource-manage/resource-manage.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {path:'', component: LeaveComponent},
  {path:'login', component: LoginComponent},
  {path:'profile', component: ProfileComponent},
  {path:'news', component: NewsComponent},
  {path:'leavemanage', component: LeaveManageComponent},
  {path:'admin', component: HrdashboardComponent},
  {path:'employeemng', component: EmployeeManageComponent},
  {path:'payroll', component: PayrollComponent},
  {path:'projectmanage', component: ProjectManageComponent},
  {path:'resourcemanage', component: ResourceManageComponent},
  {path:'chat', component: ChatComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
