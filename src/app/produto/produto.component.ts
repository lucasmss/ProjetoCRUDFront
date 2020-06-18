import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProdutoService} from "./produto.service";
import {ProdutoModule} from "./produto/produto.module";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: ProdutoModule;
  prod: ProdutoService;
  formCadastarProduto: FormGroup;


  constructor(private service: ProdutoService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.formCadastarProdu();
  }

  private formCadastarProdu(): void {

    this.formCadastarProduto = this.formBuilder.group({
      codigo: new FormControl(null),
      nome: new FormControl(null),
      tipo: new FormControl(null),
      preco: new FormControl(null),

    });

  }


  cadastrar() {

    this.produto.codigo =  this.formCadastarProduto.get('codigo');
    this.produto.nome = this.formCadastarProduto.get('nome');
    this.produto.tipo = this.formCadastarProduto.get('tipo');
    this.produto.preco = this.formCadastarProduto.get('preco');

    return this.prod.adicionarProduto(this.produto.codigo, this.produto.nome, this.produto.tipo, this.produto.preco);


  }
}
