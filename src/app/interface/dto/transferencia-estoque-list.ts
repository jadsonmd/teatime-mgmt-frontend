import { ProdutoItem } from "../produto-item";
import { Unidade } from "../unidade";

export interface TransferenciaEstoqueList {
    id: string;
    codigoProduto: string;
    nomeProduto: string;
    lote: string;
    dataValidade: Date;
    nomeUnidade: string;
    quantidade: number;
    idProdutoItem: string;
    idUnidade: number;
}
