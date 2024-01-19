import { SexoEnum } from "../sexo/sexo.enum";
import { UltimaOcorrencia } from "./ultima-ocorrencia.model";

export class PessoaDesaparecidaDetail {
  id!: number;
  nome!: string;
  idade!: number;
  sexo!: SexoEnum;
  urlFoto!: string;
  ultimaOcorrencia!: UltimaOcorrencia;
}
