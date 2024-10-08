export interface NovoProduto {

    id: string;
    idParceiro: string;
    codigo: string;
    nome: string;
    marca: string;
    precoVenda: number;
    estoqueMin: number;
    estoqueMax: number;
    idTipoProduto: string;
    idEspecieProduto: string;
    idUnidadeMedida: string;
    idFornecedor: string;
}
