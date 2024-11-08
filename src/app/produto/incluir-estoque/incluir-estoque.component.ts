import { Component } from '@angular/core';
import { Produto } from '../produto';
import { GerenciarEstoqueDTO } from '../gerenciar-estoque-dto';
import { ProdutoService } from '../../service/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats } from '@angular/material/core';
import { CustomDatepicker } from '../../custom/custom-datepicker';

export const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};

@Component({
  selector: 'app-incluir-estoque',
  templateUrl: './incluir-estoque.component.html',
  styleUrl: './incluir-estoque.component.scss',
  providers: [
    { provide: DateAdapter, useClass: CustomDatepicker },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
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
