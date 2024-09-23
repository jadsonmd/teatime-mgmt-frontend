import { Component, Inject, OnInit } from '@angular/core';
import { ProdutoService } from '../../service/produto.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransferenciaEstoqueDetalhe } from '../transferencia-estoque-detalhe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-historico-movimentacao-item-dialog',
  templateUrl: './historico-movimentacao-item-dialog.component.html',
  styleUrl: './historico-movimentacao-item-dialog.component.scss'
})
export class HistoricoMovimentacaoItemDialogComponent implements OnInit {

  data: Observable<TransferenciaEstoqueDetalhe[]> 

  constructor(
    private produtoService: ProdutoService,
    @Inject(MAT_DIALOG_DATA) public idProdutoItem: string,
  ) {
    this.data = produtoService.getHistoricoMovimentacaoItem(idProdutoItem);
  }

  ngOnInit(): void {
    
  }

}
