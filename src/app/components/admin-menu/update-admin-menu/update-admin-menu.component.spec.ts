import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminMenuComponent } from './update-admin-menu.component';

describe('UpdateAdminMenuComponent', () => {
  let component: UpdateAdminMenuComponent;
  let fixture: ComponentFixture<UpdateAdminMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAdminMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
