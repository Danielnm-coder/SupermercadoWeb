import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { config } from '../../../config/environment';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-consulta-produtos',
  imports: [CommonModule,RouterLink],
  templateUrl: './consulta-produtos.component.html',
  styleUrl: './consulta-produtos.component.css'
})
export class ConsultaProdutosComponent {

produtos: any[] = [];
mensagem: string = '';
mensagemErro: string = '';



  constructor(private http: HttpClient){}

    ngOnInit(){
      this.http .get(config.apiProdutos)
      .subscribe({
        next:(data) => {
          this.produtos = data as any[];
        }
      })
    }

    onDelete(id: string){
      if(confirm('Deseja realmente excluir o produto desejado?')){
        this.http.delete(config.apiProdutos + '/' + id)
          .subscribe({
            next: (data: any) => {
              this.mensagem = data.message;
              this.ngOnInit()
            },
            error: (data: any) => {
              this.mensagemErro = data.message;
            }
          })

          }
      }
    }
