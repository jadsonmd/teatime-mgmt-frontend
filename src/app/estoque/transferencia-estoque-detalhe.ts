import { ProdutoItem } from "./transferencia-estoque-list";

export interface TransferenciaEstoqueDetalhe {
    dataTransferencia: Date;
    id: string;
    idTransferenciaEstoque: string;
    idUnidadeDestino: number;
    idUnidadeOrigem: number;
    idUsuarioRecebeu: string;
    idUsuarioTransferiu: string;
    observacao: string;
    quantidade: number;
    tipoMovimentacao: string;
    transferenciaEstoque: TransferenciaEstoque;
    unidadeOrigem: Unidade;
    unidadeDestino: Unidade;
    usuarioRecebeu: Usuario;
    usuarioTransferiu: Usuario;
}

export interface TransferenciaEstoque {
    id: string;
    idParceiro: string;
    idProdutoItem: string;
    idUnidade: number;
    quantidade: number;
    unidade: Unidade;
    produtoItem: ProdutoItem;
}

export interface Unidade {
    id: string;
    nome: string;
    idParceiro: string;
}

export interface Usuario {
    id: string;
    name: string;
    email: string;
    idParceiro: string;
    idUnidade: number;
}