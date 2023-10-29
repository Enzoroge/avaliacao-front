import { Produto } from 'src/app/interfaces/produtos';
import { ProdutosService } from './../../services/produtos.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent {

  constructor(
    private service: ProdutosService
  ){

  }

    produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    codigoDeBarras: new FormControl(''),
    preco: new FormControl(0)
  });

  create() {
    const produto: Produto = this.produtoForm.value as unknown as Produto;


    this.service.create(produto).subscribe(
      (result) => {
        Swal.fire(
          'PARABÉNS CHAMPS!!',
          'Usuário cadastrado com sucesso!',
          'success'
        );
      },
      (error) => {
        const { message } = error;
        Swal.fire('DEU ERRO', message, 'error');
      }
    );
  }
}



