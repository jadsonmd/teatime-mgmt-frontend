import { Injectable } from '@angular/core';
import { ProdutoItem } from '../produto/produto-item';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NovoProduto } from '../produto/novo-produto-dialog/novo-produto';
import { AuthService } from '@auth0/auth0-angular';
import { Produto } from '../produto/produto';
import { GerenciarEstoqueDTO } from '../produto/gerenciar-estoque-dto';
import { ProdutoItemEntity } from '../produto/produto-item-entity';
import { TransferenciaEstoqueList } from '../estoque/transferencia-estoque-list';
import { TransferirEstoqueDTO } from '../estoque/transferir-estoque-dto';
import { ReceberEstoqueDTO } from '../estoque/receber-estoque-dto';
import { TransferenciaEstoqueDetalhe } from '../estoque/transferencia-estoque-detalhe';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  user: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private readonly httpClient: HttpClient,
  ) {
    const user = sessionStorage.getItem('usuario');
    if (user) {
      this.user = JSON.parse(user);
    }
  }


  findAll(): Observable<ProdutoItem[]> {
    return this.httpClient.get<ProdutoItem[]>(
      `http://localhost:4200/api/teatime/produtos/lista-produto-com-itens/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

  saveProduto(produto: any): Observable<any> {
    produto.idParceiro = this.user.idParceiro;
    return this.httpClient.post<NovoProduto>(
      'http://localhost:4200/api/teatime/produtos',
      produto,
      this.httpOptions
    );
  }

  updateProduto(produto: any): Observable<any> {
    produto.idParceiro = this.user.idParceiro;
    return this.httpClient.put<NovoProduto>(
      'http://localhost:4200/api/teatime/produtos',
      produto,
      this.httpOptions
    );
  }

  deleteProduto(idProduto: string): Observable<void> {
    return this.httpClient.delete<void>(
      `http://localhost:4200/api/teatime/produtos/${idProduto}`, this.httpOptions
    );
  }

  getAllProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(
      `http://localhost:4200/api/teatime/produtos/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

  getAllProdutoItens(idProduto: string): Observable<ProdutoItemEntity[]> {
    return this.httpClient.get<ProdutoItemEntity[]>(
      `http://localhost:4200/api/teatime/produtos/produto-itens/${idProduto}`,
      this.httpOptions
    );
  }

  incluirEstoque(produtoItem: GerenciarEstoqueDTO) {
    produtoItem.idUnidadeDestino = this.user.idUnidade;
    produtoItem.idUsuarioRecebeu = this.user.id;
    return this.httpClient.post<Produto>(
      'http://localhost:4200/api/teatime/produtos/incluir-stock',
      produtoItem,
      this.httpOptions
    );
  }

  baixarEstoque(produtoItem: GerenciarEstoqueDTO) {
    produtoItem.idUnidadeDestino = this.user.idUnidade;
    produtoItem.idUsuarioRecebeu = this.user.id;
    return this.httpClient.post<Produto>(
      'http://localhost:4200/api/teatime/produtos/baixar-stock',
      produtoItem,
      this.httpOptions
    );
  }

  findAllTransferenciaEstoque(): Observable<TransferenciaEstoqueList[]> {
    return this.httpClient.get<TransferenciaEstoqueList[]>(
      `http://localhost:4200/api/teatime/produtos/lista-trasferecia-stock/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

  transferirEstoque(transferirEstoqueDTO: TransferirEstoqueDTO): any {
    transferirEstoqueDTO.idUsuarioTransferiu = this.user.id;
    transferirEstoqueDTO.idParceiro = this.user.idParceiro; 
    return this.httpClient.post<any>(
      'http://localhost:4200/api/teatime/produtos/transferir-stock',
      transferirEstoqueDTO,
      this.httpOptions
    );
  }

  receberEstoque(receberEstoqueDTO: ReceberEstoqueDTO): any {
    receberEstoqueDTO.idUsuarioRecebeu = this.user.id;
    return this.httpClient.post<any>(
      'http://localhost:4200/api/teatime/produtos/receber-stock',
      receberEstoqueDTO,
      this.httpOptions
    );
  }

  findAllTransferenciaEstoquePendenteRecebimento(): Observable<TransferenciaEstoqueDetalhe[]> {
    return this.httpClient.get<TransferenciaEstoqueDetalhe[]>(
      `http://localhost:4200/api/teatime/produtos/lista-trasferecia-stock-pendente-recebimento/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }
}
