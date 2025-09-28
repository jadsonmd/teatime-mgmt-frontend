import { Injectable } from '@angular/core';
import { ProdutoItem } from '../produto/produto-item';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NovoProduto } from '../produto/novo-produto-dialog/novo-produto';
import { AuthService } from '@auth0/auth0-angular';
import { Produto } from '../produto/produto';
import { GerenciarEstoqueDTO } from '../produto/gerenciar-estoque-dto';
import { ProdutoItemEntity } from '../produto/produto-item-entity';
import { TransferenciaEstoqueList } from '../interface/dto/transferencia-estoque-list';
import { TransferirEstoqueDTO } from '../interface/dto/transferir-estoque-dto';
import { ReceberEstoqueDTO } from '../interface/dto/receber-estoque-dto';
import { TransferenciaEstoqueDetalhe } from '../interface/transferencia-estoque-detalhe';
import { environment } from '../../environments/environment.ts';
import { TransferenciaEstoque } from '../interface/transferencia-estoque';

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
      `${environment.apiUrl}/api/teatime/produtos/lista-produto-com-itens/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

  saveProduto(produto: any): Observable<any> {
    produto.idParceiro = this.user.idParceiro;
    return this.httpClient.post<NovoProduto>(
      `${environment.apiUrl}/api/teatime/produtos`,
      produto,
      this.httpOptions
    );
  }

  updateProduto(produto: any): Observable<any> {
    produto.idParceiro = this.user.idParceiro;
    return this.httpClient.put<NovoProduto>(
      `${environment.apiUrl}/api/teatime/produtos`,
      produto,
      this.httpOptions
    );
  }

  deleteProduto(idProduto: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment.apiUrl}/api/teatime/produtos/${idProduto}`, this.httpOptions
    );
  }

  getAllProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(
      `${environment.apiUrl}/api/teatime/produtos/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

  getAllProdutoItens(idProduto: string): Observable<ProdutoItemEntity[]> {
    return this.httpClient.get<ProdutoItemEntity[]>(
      `${environment.apiUrl}/api/teatime/produtos/produto-itens/${idProduto}`,
      this.httpOptions
    );
  }

  incluirEstoque(produtoItem: GerenciarEstoqueDTO) {
    produtoItem.idUnidadeDestino = this.user.idUnidade;
    produtoItem.idUsuarioRecebeu = this.user.id;
    produtoItem.idParceiro = this.user.idParceiro;
    return this.httpClient.post<Produto>(
      `${environment.apiUrl}/api/teatime/produtos/incluir-stock`,
      produtoItem,
      this.httpOptions
    );
  }

  baixarEstoque(produtoItem: GerenciarEstoqueDTO) {
    produtoItem.idUnidadeDestino = this.user.idUnidade;
    produtoItem.idUsuarioRecebeu = this.user.id;
    produtoItem.idParceiro = this.user.idParceiro;
    return this.httpClient.post<Produto>(
      `${environment.apiUrl}/api/teatime/produtos/baixar-stock`,
      produtoItem,
      this.httpOptions
    );
  }

  findAllTransferenciaEstoque(): Observable<TransferenciaEstoque[]> {
    return this.httpClient.get<TransferenciaEstoque[]>(
      `${environment.apiUrl}/api/teatime/produtos/lista-trasferecia-stock/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

  transferirEstoque(transferirEstoqueDTO: TransferirEstoqueDTO): any {
    transferirEstoqueDTO.idUsuarioTransferiu = this.user.id;
    transferirEstoqueDTO.idParceiro = this.user.idParceiro; 
    return this.httpClient.post<any>(
      `${environment.apiUrl}/api/teatime/produtos/transferir-stock`,
      transferirEstoqueDTO,
      this.httpOptions
    );
  }

  receberEstoque(receberEstoqueDTO: ReceberEstoqueDTO): any {
    receberEstoqueDTO.idUsuarioRecebeu = this.user.id;
    return this.httpClient.post<any>(
      `${environment.apiUrl}/api/teatime/produtos/receber-stock`,
      receberEstoqueDTO,
      this.httpOptions
    );
  }

  findAllTransferenciaEstoquePendenteRecebimento(): Observable<TransferenciaEstoqueDetalhe[]> {
    return this.httpClient.get<TransferenciaEstoqueDetalhe[]>(
      `${environment.apiUrl}/api/teatime/produtos/lista-trasferecia-stock-pendente-recebimento/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

  getHistoricoMovimentacaoItem(idProdutoItem: string): Observable<TransferenciaEstoqueDetalhe[]> {
    return this.httpClient.get<TransferenciaEstoqueDetalhe[]>(
      `${environment.apiUrl}/api/teatime/produtos/historico-movimentacao-item/idProdutoItem/${idProdutoItem}`,
      this.httpOptions
    );
  }
}
