export interface Produto {

    id: string;
    codigo: string;
    nome: string;
    marca: string;
    precoVenda: number;
    estoqueMin: number;
    estoqueMax: number;
    estoque: number;
    idParceiro: string;
    idTipoProduto: number;
    idEspecieProduto: number;

}
