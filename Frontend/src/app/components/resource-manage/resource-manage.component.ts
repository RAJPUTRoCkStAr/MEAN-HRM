import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, map } from 'rxjs';
import { Employee, Hardware, Resource, Software } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';
import { AllHardware, AllSoftware } from 'src/app/models/resource';
import { ResourceService } from 'src/app/services/resource.service';
import { CustomAdapter, CustomDateParserFormatter } from '../resource-manage/datetime-format';

@Component({
  selector: 'app-resource-manage',
  templateUrl: './resource-manage.component.html',
  styleUrls: ['./resource-manage.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class ResourceManageComponent {
  @Input() obj: Resource[] = [];
  model?: string;

  constructor(private ResourceService: ResourceService, private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) { }

  resources: Resource[] = []
  employees: Employee[] = []
  softwares: AllSoftware[] = []
  hardwares: AllHardware[] = []
  projects: Project[] = []

  //#region Form data

  form = new FormGroup({
    Email: new FormControl(''),
    ResourcesType: new FormControl(''),
    ResourcesName: new FormControl(''),
    Description: new FormControl(''),
    IssuedDate: new FormControl(''),
    Status: new FormControl(''),
  });

  formData = {
    Email: '',
    ResourcesType: '',
    ResourcesName: '',
    Description: '',
    IssuedDate: '',
    Status: ''
  };

  //#endregion

  ngOnInit() {
    // this.ResourceService.getAllResources().subscribe((result: Resource[]) => (this.resources = result))

    const resource = this.ResourceService.getAllResources().pipe(map((result: Resource[]) => (this.resources = result)))
    const software = this.ResourceService.getSoftwareResources().pipe(map((result: AllSoftware[]) => (this.softwares = result)))
    const hardware = this.ResourceService.getHardwareResource().pipe(map((result: AllHardware[]) => (this.hardwares = result)))

    forkJoin([resource, software, hardware]).subscribe(() => {
      
     });
  }

  timeOut(){
    setTimeout(() => {
      window.location.reload()
    }, 2500);
  }

  Submit(formData: any) {
    this.ResourceService.createResource(formData);
    alert("Resource Allocated Successfully!")

    this.timeOut()
  }
}
