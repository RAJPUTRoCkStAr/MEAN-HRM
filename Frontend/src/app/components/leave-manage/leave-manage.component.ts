import { Component } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { Leaves } from 'src/app/models/leaves';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leave-manage',
  templateUrl: './leave-manage.component.html',
  styleUrls: ['./leave-manage.component.css']
})
export class LeaveManageComponent {
  
  constructor(private LeaveService : LeaveService) {}
  leaves: Leaves[] = []
  leavesbyStatus: Leaves[] = []

  ngOnInit(){
    const allLeaves = this.LeaveService.getLeaves().pipe(map((result: Leaves[]) => (this.leaves = result)))
    const leavesbyStatus = this.LeaveService.getLeaveByStatus().pipe(map((result: Leaves[]) => (this.leavesbyStatus = result)))

    forkJoin([allLeaves, leavesbyStatus]).subscribe(() => {

    })
  }

  timeOut(){
    setTimeout(() => {
      window.location.reload()
    }, 2500);
  }

  leaveApprove(id: any){
    this.LeaveService.approve(id)
    alert("Leave Request Approved!")

    this.timeOut()
  }

  leaveReject(id: any){
    this.LeaveService.reject(id)
    alert("Leave Request Rejected!")

    this.timeOut()
  }
}
