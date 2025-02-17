import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { config } from '../../../config/environment';
import { appConfig } from '../../../app.config';

@Component({
  selector: 'app-cadastro-produtos',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent {

  categorias: any[] = [];
  mensagem: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(){
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
      this.mensagem = 'Erro ao cadastrar produto';
      }
    });
  }
}
