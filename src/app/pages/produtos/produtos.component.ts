import { AfterViewInit, Component } from '@angular/core';
import { Produto } from 'src/app/interfaces/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements AfterViewInit{
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

  produtos: Produto[]=[]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service : ProdutosService
  ){

  }

  ngAfterViewInit() {

    this.findAll();


  }


  findAll():void{
    this.service.findAll().subscribe(resposta =>{
      this.produtos = resposta
    })
  }

  selecionaDelete(produto : Produto) {

    console.log(produto)
    this.produtoSelecionado = produto;
    console.log(this.produtoSelecionado)

  }


   apagarRegistro(id : Produto):void{
    this.service.delete(id).subscribe(resposta =>{
      this.router.navigate(['produtos'])


    })
    Swal.fire(
      'PARABÉNS!!',
      'Produto cadastrado com sucesso!',
      'success'
    );
  }

  getById():void{
    this.service.getById(this.id_produto).subscribe(resposta =>{
      this.produto=resposta
    })
  }




}
