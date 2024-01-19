import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaDesaparecidaRoutingModule } from './pessoa-desaparecida-routing.module';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';
import { DetailComponent } from './detail/detail.component';
import { PessoaDesaparecidaService } from 'src/app/domain/pessoa-desaparecida/pessoa-desaparecida.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent, FilterComponent, DetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PessoaDesaparecidaRoutingModule,
    SharedModule
  ],
  providers: [
    PessoaDesaparecidaService
  ]
})
export class PessoaDesaparecidaModule { }
