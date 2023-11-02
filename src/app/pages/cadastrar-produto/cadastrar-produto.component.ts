import { Produto } from 'src/app/interfaces/produtos';
import { ProdutosService } from './../../services/produtos.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent {

  constructor(private router : Router,
    private service: ProdutosService
  ){

  }



    nome: string= ''

    produtoForm = new FormGroup({
    nome: new FormControl('', [Validators.required] || [Validators.minLength(4)]),
    codigoDeBarra: new FormControl('', Validators.maxLength(12) && Validators.required),
    preco: new FormControl(0)
  });

  create() {
    const produto: Produto = this.produtoForm.value as unknown as Produto;
    this.service.create(produto).subscribe(
       (result) => {
        this.router.navigate(['produtos'])
        Swal.fire(
          'PARABÉNS!!',
          'Produto cadastrado com sucesso!',
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



