import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController,} from '@angular/common/http/testing';
import { LeaveManageComponent } from './leave-manage.component';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';

describe('LeaveManageComponent', () => {
  let component: LeaveManageComponent;
  let fixture: ComponentFixture<LeaveManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveManageComponent, NavbarComponent ],
      imports: [ HttpClientModule, HttpClientTestingModule, MatCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
