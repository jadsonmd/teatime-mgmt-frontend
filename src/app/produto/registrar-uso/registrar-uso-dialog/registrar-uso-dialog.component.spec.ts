import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUsoDialogComponent } from './registrar-uso-dialog.component';

describe('RegistrarUsoDialogComponent', () => {
  let component: RegistrarUsoDialogComponent;
  let fixture: ComponentFixture<RegistrarUsoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarUsoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarUsoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
