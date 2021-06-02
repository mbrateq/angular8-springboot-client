import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMouduleComponent } from './about-moudule.component';

describe('AboutMouduleComponent', () => {
  let component: AboutMouduleComponent;
  let fixture: ComponentFixture<AboutMouduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMouduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMouduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
