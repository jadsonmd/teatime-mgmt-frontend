import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUsoComponent } from './registrar-uso.component';

describe('RegistrarUsoComponent', () => {
  let component: RegistrarUsoComponent;
  let fixture: ComponentFixture<RegistrarUsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarUsoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
