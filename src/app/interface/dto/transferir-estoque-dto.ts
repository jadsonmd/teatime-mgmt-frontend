export interface TransferirEstoqueDTO {

    idParceiro: string;
    idProdutoItem: string;
    idUnidadeOrigem: number;
    idUnidadeDestino: number;
    quantidade: number;
    observacao: string;
    idUsuarioTransferiu: string;
    quantidadeDisponivel: number;
}
