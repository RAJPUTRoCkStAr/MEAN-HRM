import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController,} from '@angular/common/http/testing';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let httpclient: HttpClient;
  let httptestcontrol: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ProjectsService],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsService);

    httptestcontrol = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get all projects', () => {
    const testpost: any = [
      { Email: 'test@testmail.com', ReqType: 'leave', RequestDate: '2022-02-03', Month: 'February', Reason: 'Sick', Status: 'Pending' }
    ];
    service.getAllProjects().subscribe((posts: any) => {
      expect(testpost).toBe(posts, 'Check mocked data');
    });

    const req = httptestcontrol.expectOne('https://hrms-web.herokuapp.com/projects/all');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testpost);
    httptestcontrol.verify();

  });

});
