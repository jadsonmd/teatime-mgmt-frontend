import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferirEstoqueDialogComponent } from './transferir-estoque-dialog.component';

describe('TransferirEstoqueDialogComponent', () => {
  let component: TransferirEstoqueDialogComponent;
  let fixture: ComponentFixture<TransferirEstoqueDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferirEstoqueDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferirEstoqueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
