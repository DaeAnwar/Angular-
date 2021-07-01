import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlaceComponent } from './table-place.component';

describe('TablePlaceComponent', () => {
  let component: TablePlaceComponent;
  let fixture: ComponentFixture<TablePlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
