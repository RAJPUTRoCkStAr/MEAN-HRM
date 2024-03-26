import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { NewsComponent } from './news.component';
import { MatCardModule } from '@angular/material/card';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsComponent, NavbarComponent],
      imports: [ MatCardModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
