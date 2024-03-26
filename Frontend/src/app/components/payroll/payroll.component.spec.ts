import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController,} from '@angular/common/http/testing';
import { PayrollComponent } from './payroll.component';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from '../common/navbar/navbar.component';


describe('PayrollComponent', () => {
  let component: PayrollComponent;
  let fixture: ComponentFixture<PayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollComponent, NavbarComponent ],
      imports: [ HttpClientModule, HttpClientTestingModule, MatCardModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
