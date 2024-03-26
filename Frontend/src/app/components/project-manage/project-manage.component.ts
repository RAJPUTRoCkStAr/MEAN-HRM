import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ProjectsService } from 'src/app/services/projects.service';
import { Projects, Resource } from 'src/app/models/employee';

@Component({
  selector: 'app-project-manage',
  templateUrl: './project-manage.component.html',
  styleUrls: ['./project-manage.component.css'],
})
export class ProjectManageComponent {
  @Input() projects!: Project;

  model1?: NgbDateStruct;
  model2?: NgbDateStruct;

  constructor(private ProjectService: ProjectsService) {}
  getProjects: Projects[] = []

  //#region project data
  form = new FormGroup({
    Email: new FormControl(''),
    ManagerName: new FormControl(''),
    ProjectName: new FormControl(''),
    ProjectDuration: new FormControl(''),
    StartDate: new FormControl(''),
    EndDate: new FormControl(''),
    Status: new FormControl('')
  })

  formData = {
    Email: '',
    ManagerName: '',
    ProjectName: '',
    ProjectDuration: '',
    StartDate: '',
    EndDate: '',
    Status: '',
  }
  //#endregion

  ngOnInit() : void{
    this.ProjectService.getAllProjects().subscribe((result: Projects[]) => (this.getProjects = result))
  }

  timeOut(){
    setTimeout(() => {
      window.location.reload()
    }, 2500);
  }

  Submit(formData: any){
    this.ProjectService.createProject(formData)
    alert("Project Assigned Successfully!")

    this.timeOut()
  }
}
