import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShortInfoComponent } from './short-info.component';

describe('ShortInfoComponent', () => {
  let component: ShortInfoComponent;
  let fixture: ComponentFixture<ShortInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
