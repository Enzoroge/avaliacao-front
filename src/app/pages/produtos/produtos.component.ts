  import { AfterViewInit, Component } from '@angular/core';
  import { Produto } from 'src/app/interfaces/produtos';
  import { ProdutosService } from 'src/app/services/produtos.service';
  import { Router } from '@angular/router';
  import Swal from 'sweetalert2';
  import { FormControl, FormGroup, Validators } from '@angular/forms';



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

    produtoForm = new FormGroup({
      id: new FormControl(),
      nome: new FormControl('', Validators.required),
      codigoDeBarra: new FormControl('', Validators.required),
      preco: new FormControl(0, Validators.min(0)),

    })

    produtos: Produto[]=[]

    constructor(
      private router: Router,
      private service : ProdutosService,

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
     this.produtoSelecionado = produto;

    }


    apagarRegistro(id : Produto):void{
      this.service.delete(id).subscribe(resposta =>{
        this.router.navigate(['produtos'])
        this.findAll();
        Swal.fire(
          'PARABÉNS!!',
          'Produto apagado com sucesso!',
          'success'

        );

      })


    }



    atualizarTabela(): void {
      this.findAll;
    }



  }


