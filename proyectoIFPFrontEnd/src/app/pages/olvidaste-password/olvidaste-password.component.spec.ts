import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidastePasswordComponent } from './olvidaste-password.component';

describe('OlvidastePasswordComponent', () => {
  let component: OlvidastePasswordComponent;
  let fixture: ComponentFixture<OlvidastePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OlvidastePasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OlvidastePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
