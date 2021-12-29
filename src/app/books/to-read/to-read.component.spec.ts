import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToReadBooksComponent } from './to-read.component';


describe('ToReadBooksComponent', () => {
  let component: ToReadBooksComponent;
  let fixture: ComponentFixture<ToReadBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToReadBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToReadBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
