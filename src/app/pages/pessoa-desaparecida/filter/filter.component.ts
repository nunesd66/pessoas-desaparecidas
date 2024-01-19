import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SexoEnum } from 'src/app/domain/sexo/sexo.enum';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  
  @Output()
  onSearch = new EventEmitter<void>();

  @Output()
  onClear = new EventEmitter<void>();
  
  formGroup!: FormGroup;
  sexoEnum = SexoEnum;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    this.formGroup = this.formBuilder.group({
      nome: [''],
      idade:[''],
      sexo: [null]
    });
  }

  shared(): void {
    const nome = this.formGroup.controls['nome'].value;
    if (nome != '') {
      sessionStorage.setItem('nome', nome.trim());
    }

    const idade = this.formGroup.controls['idade'].value;
    if (idade != '') {
      sessionStorage.setItem('faixaIdadeInicial', idade);
      sessionStorage.setItem('faixaIdadeFinal', idade);
    }
    
    const sexo = this.formGroup.controls['sexo'].value;
    if (sexo != null) {
      sessionStorage.setItem('sexo', sexo);
    }

    this.onSearch.emit();
  }
  
  clear(): void {
    this.formInit();
    this.onClear.emit();
  }

}
