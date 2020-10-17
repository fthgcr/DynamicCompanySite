import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminSliderComponent } from './update-admin-slider.component';

describe('UpdateAdminSliderComponent', () => {
  let component: UpdateAdminSliderComponent;
  let fixture: ComponentFixture<UpdateAdminSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAdminSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdminSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
