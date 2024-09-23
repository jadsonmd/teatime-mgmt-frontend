import { TransferenciaEstoque } from "./transferencia-estoque";
import { Unidade } from "./unidade";
import { Usuario } from "./usuario";

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
    usuarioRecebeu: Usuario;
    usuarioTransferiu: Usuario;
}
