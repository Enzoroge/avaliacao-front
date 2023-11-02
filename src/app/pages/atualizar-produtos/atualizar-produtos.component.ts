import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-atualizar-produtos',
  templateUrl: './atualizar-produtos.component.html',
  styleUrls: ['./atualizar-produtos.component.css']
})
export class AtualizarProdutosComponent {

  id_produto=''

  produto : Produto={
    id: 0,
    nome: '',
    codigoDeBarra: '',
    preco: 0

  }

  produtoSelecionado: Produto ={
    id: 0,
    nome: '',
    codigoDeBarra: '',
    preco: 0
  }

  produtoForm = new FormGroup({
    id: new FormControl(),
    nome: new FormControl('', Validators.required),
    codigoDeBarra: new FormControl('', Validators.required),
    preco: new FormControl(0, Validators.min(0)),

  })

  produtos: Produto[]=[]

  constructor(
    private service : ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void{
    this.id_produto= this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findAll():void{
    this.service.findAll().subscribe(resposta =>{
      this.produtos = resposta

    })
  }

  selecionaUpdate(produto : Produto) {
    this.produtoForm.reset()
      this.produtoForm.patchValue({
      id: produto.id,
      nome: produto.nome,
      codigoDeBarra: produto.codigoDeBarra,
      preco: produto.preco
    });

  }

  update():void {
    const produto: Produto = this.produtoForm.value as Produto
    this.service.update(produto).subscribe((resposta) => {
      this.router.navigate(['/produtos'])
      this.findAll();
          Swal.fire(
        'PARABÉNS!!',
        'Produto atualizado com sucesso!',
        'success'

        );


    }, )
  }

  findById(): void {
    this.service.getById(this.id_produto).subscribe((resposta) => {
      this.produto = resposta;

      this.produtoForm.patchValue({
        id: this.produto.id,
        nome: this.produto.nome,
        codigoDeBarra: this.produto.codigoDeBarra,
        preco: this.produto.preco,
      });
    });
  }

  atualizarTabela(): void {
    this.findAll;
  }



}
