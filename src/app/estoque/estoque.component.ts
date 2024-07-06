import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { TransferenciaEstoqueList } from './transferencia-estoque-list';
import { TransferirEstoqueDTO } from './transferir-estoque-dto';
import { ReceberEstoqueDTO } from './receber-estoque-dto';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.scss'
})
export class EstoqueComponent implements OnInit {

  displayedColumns: string[] = [
    'codigo',
    'nome',
    'lote',
    'dataValidade',
    'unidade',
    'quantidade',
    'star'
  ];

  dataSource: TransferenciaEstoqueList[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService
      .findAllTransferenciaEstoque()
      .subscribe((estoques) => {
        this.dataSource = estoques;
      });

  }

  transferir(estoque: TransferenciaEstoqueList): void {
    const transferirEstoqueDTO: TransferirEstoqueDTO = {
      idProdutoItem: estoque.idProdutoItem,
      idParceiro: estoque.idParceiro,
      quantidade: 5,
      idUnidadeOrigem: estoque.idUnidade,
      idUnidadeDestino: 2,
      observacao: 'Aqui vai uma transf. para a unidade 2',
      idUsuarioTransferiu: 'auth0|66579aa58313fe1b68ee0008',
    };
    this.produtoService
      .transferirEstoque(transferirEstoqueDTO)
      .subscribe(() => {
        this.produtoService
          .findAllTransferenciaEstoque()
          .subscribe((estoques) => {
            this.dataSource = estoques;
          });
      });
  }

  receber(estoque: TransferenciaEstoqueList): void {
    const receberEstoqueDTO: ReceberEstoqueDTO = {
      idTransferenciaEstoque: "e9de63f6-a6b4-4096-aa57-7476a977a1c6",
      idTransferenciaEstoqueDetalhe: "e7ca78aa-598d-41ed-9463-2ba9f2fa20f5",
      idUsuarioRecebeu: "auth0|66579aa58313fe1b68ee0008"
    }
    this.produtoService
      .receberEstoque(receberEstoqueDTO)
      .subscribe(() => {
        this.produtoService
          .findAllTransferenciaEstoque()
          .subscribe((estoques) => {
            this.dataSource = estoques;
          });
      });
  }

}
