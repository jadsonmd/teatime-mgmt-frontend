import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NovoProduto } from './novo-produto';
import { ProdutoService } from '../../service/produto.service';
import { ProdutoItem } from '../produto-item';
import { CadastroService } from '../../service/cadastro.service';
import { EspecieProduto } from '../../interface/especie-produto';
import { Observable } from 'rxjs';
import { TipoProduto } from '../../interface/tipo-produto';
import { FornecedorService } from '../../service/fornecedor.service';
import { UnidadeMedidaService } from '../../service/unidade-medida.service';
import { Fornecedor } from '../../interface/fornecedor';
import { UnidadeMedida } from '../../interface/unidade-medida';

@Component({
  selector: 'app-novo-produto-dialog',
  templateUrl: './novo-produto-dialog.component.html',
  styleUrl: './novo-produto-dialog.component.scss',
})
export class NovoProdutoDialogComponent implements OnInit {
  title: string = '';
  idProduto: string = '';

  produto: NovoProduto = {
    id: '',
    idParceiro: '',
    codigo: '',
    nome: '',
    marca: '',
    precoVenda: 0,
    estoqueMin: 0,
    estoqueMax: 0,
    idTipoProduto: '',
    idEspecieProduto: '',
    idFornecedor: '',
    idUnidadeMedida: '',
  };

  especieProdutos!: Observable<EspecieProduto[]>;
  tipoProdutos!: Observable<TipoProduto[]>;
  fornecedores!: Observable<Fornecedor[]>;
  unidadesMedida!: Observable<UnidadeMedida[]>;

  constructor(
    public dialogRef: MatDialogRef<NovoProdutoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private produtoService: ProdutoService,
    private cadastroService: CadastroService,
    private fornecedorService: FornecedorService,
    private unidadeMedidaService: UnidadeMedidaService
  ) {
    this.produto = data;
    this.idProduto = data.idProduto;
    this.title = this.idProduto ? 'Editar Produto' : 'Criar Produto';
  }

  ngOnInit(): void {
    this.especieProdutos = this.cadastroService.findAllEspecieProduto();
    this.tipoProdutos = this.cadastroService.findAllTipoProduto();
    this.fornecedores = this.fornecedorService.findAll();
    this.unidadesMedida = this.unidadeMedidaService.findAll();
  }

  onSubmit(): void {
    if (this.idProduto) {
      this.produto.id = this.idProduto;
      this.produtoService
        .updateProduto(this.produto)
        .subscribe((prod: ProdutoItem) => {
          if (prod) {
            this.fecharModal('salvar');
          }
        });
    } else {
      this.produtoService
        .saveProduto(this.produto)
        .subscribe((prod: ProdutoItem) => {
          if (prod) {
            this.fecharModal('salvar');
          }
        });
    }
  }

  cancelar(): void {
    this.fecharModal('cancelar');
  }

  fecharModal(action: string): void {
    this.dialogRef.close(action);
  }
}
