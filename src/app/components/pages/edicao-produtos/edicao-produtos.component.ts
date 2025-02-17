import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { config } from '../../../config/environment';
import { appConfig } from '../../../app.config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao-produtos',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edicao-produtos.component.html',
  styleUrl: './edicao-produtos.component.css'
})
export class EdicaoProdutosComponent {

  categorias: any[] = [];
  mensagem: string = '';
  mensagemErro: string =  '';

  constructor(private http: HttpClient,private activated: ActivatedRoute) {}

  

  ngOnInit(){

    const id = this.activated.snapshot.paramMap.get('id');

    this.http.get(config.apiProdutos + '/' + id)
    .subscribe({
      next: (data) => {
        this.form.patchValue(data);
      }
    });

    this.http.get(config.apiCategorias)
    .subscribe({
      next: (data) => {
        this.categorias = data as any[];
      }
    })
  }

  form = new FormGroup({
    nome: new FormControl('', [Validators.required,
    Validators.minLength(8)]),
    preco: new FormControl('', [Validators.required,
    Validators.min(0.01)]),
    quantidadeEmEstoque: new FormControl('', [Validators.required,
    Validators.min(0)]),
    categoriaId: new FormControl('', [Validators.required])
  });

  OnSubmit(){
    this.http.post(config.apiProdutos, this.form.value)
    .subscribe({
      next: (data: any) => {
      this.mensagem = data.message;
      this.form .reset();
      },
      error: (error) => {
      this.mensagemErro = 'Erro ao atualizar o  produto';
      }
    });
  }
}
