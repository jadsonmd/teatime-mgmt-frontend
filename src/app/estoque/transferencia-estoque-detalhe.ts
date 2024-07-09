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
}

export interface TransferenciaEstoque {
    id: string;
    idParceiro: string;
    idProdutoItem: string;
    idUnidade: number;
    quantidade: number;
    unidade: Unidade;
}

export interface Unidade {
    id: string;
    nome: string;
    idParceiro: string;
}