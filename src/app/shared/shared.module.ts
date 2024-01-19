import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SexoPipe } from './pipes/sexo.pipe';

@NgModule({
  declarations: [SexoPipe],
  imports: [CommonModule],
  exports: [SexoPipe]
})
export class SharedModule { }
