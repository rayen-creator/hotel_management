import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkingResComponent } from './add-parking-res.component';

describe('AddParkingResComponent', () => {
  let component: AddParkingResComponent;
  let fixture: ComponentFixture<AddParkingResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParkingResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParkingResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
