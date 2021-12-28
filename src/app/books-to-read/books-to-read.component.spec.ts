import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksToReadComponent } from './books-to-read.component';

describe('BooksToReadComponent', () => {
  let component: BooksToReadComponent;
  let fixture: ComponentFixture<BooksToReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksToReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksToReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
