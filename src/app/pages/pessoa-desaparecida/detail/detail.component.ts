import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PessoaDesaparecidaDetail } from 'src/app/domain/pessoa-desaparecida/pessoa-desaparecida-detail.model';
import { PessoaDesaparecidaService } from 'src/app/domain/pessoa-desaparecida/pessoa-desaparecida.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id!: string | null;
  entity!: PessoaDesaparecidaDetail;

  linkCompartilhar: string = 'localhost:4200/detail/';

  constructor(private service: PessoaDesaparecidaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
    this.getDetails();
  }

  getParams(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getDetails(): void {
    if (this.id != null) {
      this.service.getById(this.id).subscribe({
        next: data => {
          this.entity = data;
          console.log('>', data);
        },
        error: error => console.error('PessoaDesaparecidaService.getById()', error)
      });
    }
  }

  get getLinkFacebook(): string {
    return 'https://www.facebook.com/sharer/sharer.php?href=' + this.linkCompartilhar + this.id;
  }

  get getLinkWhatsApp(): string {
    return 'https://api.whatsapp.com/send?text=' + this.linkCompartilhar + this.id;
  }

}
