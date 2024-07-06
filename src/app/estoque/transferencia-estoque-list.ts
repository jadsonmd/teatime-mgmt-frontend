export interface TransferenciaEstoqueList {
    id: string;
    idParceiro: string;
    quantidade: number;
    idProdutoItem: string;
    produtoItem: ProdutoItem;
    idUnidade: number;
    unidade: Unidade;
}

export interface ProdutoItem {
    id: string;
    lote: string;
    precoCompra: number;
    quantidade: number;
    dataValidade: Date;
    idProduto: string;
    produto: Produto;
}

export interface Produto {
    id: string;
    codigo: string;
    estoque: number;
    estoqueMax: number;
    estoqueMin: number;
    idEspecieProduto: number;
    idParceiro: string;
    idTipoProduto: number;
    marca: string;
    nome: string;
    precoVenda: number;
    quantidade: number;
}

export interface Unidade {
    id: number;
    nome: string;
}
