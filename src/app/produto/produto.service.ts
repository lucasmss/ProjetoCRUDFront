import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtosUrl = 'localhost:8080/produtos';

  constructor(private http: HttpClient) { }

  adicionarProduto(codigo, nome, tipo, preco ) {
    const Objproduto = {
      codigo,
      nome,
      tipo,
      preco
    };

    this.http.post(this.produtosUrl, Objproduto).subscribe(res => {});
  }
}
