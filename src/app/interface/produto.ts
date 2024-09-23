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