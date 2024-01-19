import { Cartaz } from "./cartaz.model";
import { OcorrenciaEntrevDesapDTO } from "./ocorrencia-desaparecimento.model";

export class UltimaOcorrencia {
  dtDesaparecimento!: Date;
  dataLocalizacao!: string;
  encontradoVivo!: boolean;
  localDesaparecimentoConcat!: string;
  ocorrenciaEntrevDesapDTO!: OcorrenciaEntrevDesapDTO;
  listaCartaz!: Cartaz[];
  ocoId!: number;
}
