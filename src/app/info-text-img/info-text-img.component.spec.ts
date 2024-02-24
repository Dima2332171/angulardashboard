import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTextImgComponent } from './info-text-img.component';

describe('InfoTextImgComponent', () => {
  let component: InfoTextImgComponent;
  let fixture: ComponentFixture<InfoTextImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTextImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTextImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
