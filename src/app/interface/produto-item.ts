import { Produto } from "./produto";

export interface ProdutoItem {
    id: string;
    lote: string;
    precoCompra: number;
    quantidade: number;
    dataValidade: Date;
    idProduto: string;
    produto: Produto;
}