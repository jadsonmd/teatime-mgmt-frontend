import { ProdutoItem } from "./produto-item";
import { Unidade } from "./unidade";

export interface TransferenciaEstoque {
    id: string;
    idParceiro: string;
    idProdutoItem: string;
    idUnidade: number;
    quantidade: number;
    unidade: Unidade;
    produtoItem: ProdutoItem;
}

