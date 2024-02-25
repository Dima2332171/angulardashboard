import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectListPopupComponent } from './object-list-popup.component';

describe('ObjectListPopupComponent', () => {
  let component: ObjectListPopupComponent;
  let fixture: ComponentFixture<ObjectListPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectListPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
