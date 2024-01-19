import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/pessoa-desaparecida/list/list.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pessoa-desaparecida/pessoa-desaparecida.module').then(m => m.PessoaDesaparecidaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
