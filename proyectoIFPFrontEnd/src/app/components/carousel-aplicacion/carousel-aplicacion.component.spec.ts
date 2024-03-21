import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAplicacionComponent } from './carousel-aplicacion.component';

describe('CarouselAplicacionComponent', () => {
  let component: CarouselAplicacionComponent;
  let fixture: ComponentFixture<CarouselAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselAplicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
