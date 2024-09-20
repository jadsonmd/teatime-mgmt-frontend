import { Component } from '@angular/core';
import { Produto } from '../produto';
import { GerenciarEstoqueDTO } from '../gerenciar-estoque-dto';
import { ProdutoService } from '../../service/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-incluir-estoque',
  templateUrl: './incluir-estoque.component.html',
  styleUrl: './incluir-estoque.component.scss',
})
export class IncluirEstoqueComponent {
  produtoItem: GerenciarEstoqueDTO = {
    idParceiro: '',
    idProduto: '',
    idProdutoItem: '',
    qtd: 0,
    lote: '',
    precoCompra: 0,
    dataValidade: '',
    inUso: false,
    idUnidadeDestino: 0,
    idUsuarioRecebeu: '',
  };

  prod!: Produto;

  constructor(
    private produtoService: ProdutoService,
    private snackBar: MatSnackBar
  ) {}

  onSubmit(): void {
    this.produtoItem.idProduto = this.prod.id;

    this.produtoService.incluirEstoque(this.produtoItem).subscribe((data) => {
      if (data) {
        this.openSnackBar('Estoque incluído com sucesso!', 'OK', 'success');
      }
    });
  }

  selecionaProduto(prod: Produto): void {
    this.prod = prod;
  }

  limparCampos(): void {
    this.produtoItem = {
      idParceiro: '',
      idProduto: '',
      idProdutoItem: '',
      qtd: 0,
      lote: '',
      precoCompra: 0,
      dataValidade: '',
      inUso: false,
      idUnidadeDestino: 0,
      idUsuarioRecebeu: '',
    };
  }

  openSnackBar(msg: string, btn: string, tipo: string): void {
    this.snackBar.open(msg, btn, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
      panelClass: tipo,
    });
  }
}
