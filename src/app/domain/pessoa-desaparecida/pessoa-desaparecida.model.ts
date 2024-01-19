import { SexoEnum } from "../sexo/sexo.enum";

export class PessoaDesaparecida {
  id!: number;
  nome!: string;
  idade!: number;
  sexo!: SexoEnum;
  urlFoto!: string;
}
