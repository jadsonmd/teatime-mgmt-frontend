export interface GerenciarEstoqueDTO {

    idParceiro: string;
    idProduto: string;
    idProdutoItem: string;
    qtd: number;
    lote: string;
    precoCompra: number;
    dataValidade: string;
    inUso: boolean;

    idUsuarioRecebeu: string;
    idUnidadeDestino: number;

}
