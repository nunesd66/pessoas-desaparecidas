import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError } from "rxjs/operators";

import { PessoaDesaparecidaDetail } from "./pessoa-desaparecida-detail.model";

@Injectable()
export class PessoaDesaparecidaService {
  private baseUrl: string = 'https://abitus-api.pjc.mt.gov.br/v1/pessoas';

  constructor(private http: HttpClient) {
    this.resetSessionStorage();
  }

  getById(id: string): Observable<PessoaDesaparecidaDetail> {
    const url: string = `${this.baseUrl}/${id}`;
    return this.http.get<PessoaDesaparecidaDetail>(url);
  }

  paginate(): Observable<any> {
    const queryParams = new HttpParams()
      .set('nome', sessionStorage.getItem('nome') || '')
      .set('sexo', sessionStorage.getItem('sexo') || '')
      .set('faixaIdadeInicial', sessionStorage.getItem('faixaIdadeInicial') || '0')
      .set('faixaIdadeFinal', sessionStorage.getItem('faixaIdadeFinal') || '0')
      .set('pagina', sessionStorage.getItem('pagina') || '0');

    const url: string = `${this.baseUrl}/aberto/filtro?status=DESAPARECIDO&porPagina=12`;

    return this.http.get<any>(url, { params: queryParams })
      .pipe(
        catchError((error: any) => {
          console.error('Erro na requisição:', error);
          throw error;
        })
      );
  }

  public resetSessionStorage(): void {
    sessionStorage.setItem('nome', '');
    sessionStorage.setItem('sexo', '');
    sessionStorage.setItem('faixaIdadeInicial', '0');
    sessionStorage.setItem('faixaIdadeFinal', '0');
    sessionStorage.setItem('pagina', '0');
  }
}
