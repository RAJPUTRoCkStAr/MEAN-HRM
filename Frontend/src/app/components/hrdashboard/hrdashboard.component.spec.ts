import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { HrdashboardComponent } from './hrdashboard.component';
import { MatCardModule } from '@angular/material/card';

describe('HrdashboardComponent', () => {
  let component: HrdashboardComponent;
  let fixture: ComponentFixture<HrdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrdashboardComponent, NavbarComponent ],
      imports: [ MatCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
