import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController,} from '@angular/common/http/testing';
import { EmployeeManageComponent } from './employee-manage.component';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('EmployeeManageComponent', () => {
  let component: EmployeeManageComponent;
  let fixture: ComponentFixture<EmployeeManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeManageComponent, NavbarComponent ],
      imports: [ HttpClientModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule, NgbModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
