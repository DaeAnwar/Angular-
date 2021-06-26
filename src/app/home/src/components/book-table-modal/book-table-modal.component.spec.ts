import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTableModalComponent } from './book-table-modal.component';

describe('BookTableModalComponent', () => {
  let component: BookTableModalComponent;
  let fixture: ComponentFixture<BookTableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTableModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
