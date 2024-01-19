import { Pipe, PipeTransform } from "@angular/core";
import { SexoEnum } from "src/app/domain/sexo/sexo.enum";

@Pipe({ name: 'sexo' })
export class SexoPipe implements PipeTransform {
  transform(value: SexoEnum | undefined | null): string {
    if (value === SexoEnum.FEMININO) {
      return 'Feminino';
    }

    if (value === SexoEnum.MASCULINO) {
      return 'Masculino';
    }

    return value != null ? 'Valor inválido' : 'Indefinido';
  }
}
