import { Component, OnInit } from '@angular/core';
import { PessoaDesaparecida } from 'src/app/domain/pessoa-desaparecida/pessoa-desaparecida.model';
import { PessoaDesaparecidaService } from 'src/app/domain/pessoa-desaparecida/pessoa-desaparecida.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  page: number = 0;
  totalPages: number = 0;

  listPessoasDesaparecidas: PessoaDesaparecida[] = [];

  constructor(private service: PessoaDesaparecidaService) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(): void {
    this.service.paginate().subscribe({
      next: data => {
        this.listPessoasDesaparecidas = data.content;
        this.page = data?.pageable?.pageNumber;
        this.totalPages = data?.totalPages;
      },
      error: error => console.error('PessoaDesaparecidaService.paginate()', error)
    });
  }

  previousPage(): void {
    this.changePage(false);
  }

  nextPage(): void {
    this.changePage();
  }

  private changePage(isNext: boolean = true) {
    let pagina: string | null = sessionStorage.getItem('pagina');

    let paginaAux = pagina;

    if (isNext) {
      pagina = `${Number(pagina) + 1}`;
    } else if (Number(pagina) >= 1){
      pagina = `${Number(pagina) - 1}`;
    }

    if (pagina != paginaAux) {
      sessionStorage.setItem('pagina', pagina as string);
      this.getTableData();
    }
  }

  detail(id: number | undefined): string {
    return `/detail/${id}`
  }

  searchFilters(): void {
    this.getTableData();
  }

  clearFilters(): void {
    this.service.resetSessionStorage();
    this.getTableData();
  }

}
