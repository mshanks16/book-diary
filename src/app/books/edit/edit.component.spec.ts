import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditBooksComponent } from './edit.component';

describe('EditBooksComponent', () => {
  let component: EditBooksComponent;
  let fixture: ComponentFixture<EditBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
