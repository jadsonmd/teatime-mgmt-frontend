import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberEstoqueDialogComponent } from './receber-estoque-dialog.component';

describe('ReceberEstoqueDialogComponent', () => {
  let component: ReceberEstoqueDialogComponent;
  let fixture: ComponentFixture<ReceberEstoqueDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceberEstoqueDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceberEstoqueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
