import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoMovimentacaoItemDialogComponent } from './historico-movimentacao-item-dialog.component';

describe('HistoricoMovimentacaoItemDialogComponent', () => {
  let component: HistoricoMovimentacaoItemDialogComponent;
  let fixture: ComponentFixture<HistoricoMovimentacaoItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoMovimentacaoItemDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricoMovimentacaoItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
