import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyReadingCardComponent } from './currently-reading-card.component';

describe('CurrentlyReadingCardComponent', () => {
  let component: CurrentlyReadingCardComponent;
  let fixture: ComponentFixture<CurrentlyReadingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentlyReadingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentlyReadingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
