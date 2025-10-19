export interface RegistrarUsoDTO {
 
    id: string;
    numeroAtendimento: string;
    dataHoraRegistroUso: Date;

    idProduto: string;
    codigoProduto: string;
    nomeProduto: string;
    marcaProduto: string;

    idProdutoItem: string;
    loteProdutoItem: string;

    idUnidade: string;
    nomeUnidade: string;

    idUsuario: string;
    nomeUsuario: string;
    emailUsuario: string;
}
