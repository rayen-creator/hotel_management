import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParkingResComponent } from './my-parking-res.component';

describe('MyParkingResComponent', () => {
  let component: MyParkingResComponent;
  let fixture: ComponentFixture<MyParkingResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyParkingResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyParkingResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
