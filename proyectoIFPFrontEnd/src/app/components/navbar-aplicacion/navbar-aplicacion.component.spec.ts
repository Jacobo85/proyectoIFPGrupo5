import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAplicacionComponent } from './navbar-aplicacion.component';

describe('NavbarAplicacionComponent', () => {
  let component: NavbarAplicacionComponent;
  let fixture: ComponentFixture<NavbarAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarAplicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
