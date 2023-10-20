import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliaryServicesComponent } from './auxiliary-services.component';

describe('AuxiliaryServicesComponent', () => {
  let component: AuxiliaryServicesComponent;
  let fixture: ComponentFixture<AuxiliaryServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxiliaryServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuxiliaryServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
