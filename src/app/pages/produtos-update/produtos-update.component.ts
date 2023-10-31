import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos-update',
  templateUrl: './produtos-update.component.html',
  styleUrls: ['./produtos-update.component.css']
})
export class ProdutosUpdateComponent implements OnInit {

  id_produto=''
  produto: Produto={

    id: 0,
    nome: '',
    codigoDeBarra: '',
    preco: 0
  }

  nome: string=''

  produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    codigoDeBarra: new FormControl('', Validators.required),
    preco: new FormControl(0, Validators.min(0)),

  })
  constructor(
    private router: Router,
    private service: ProdutosService,
    private route: ActivatedRoute
    ){

    }
    ngOnInit(): void{

      this.id_produto = this.route.snapshot.paramMap.get('id')!
      console.log("Rs", this.id_produto, this.produto)
      this.findById()
      // this.id_material= this.route.snapshot.paramMap.get('id')!
      // this.findById()

    }
    update():void{

    let produto: Produto = this.produtoForm.value as Produto;

    console.log("Produto xxxxxx", this.produto)

    this.service.update(produto).subscribe((resposta =>{
    console.log("Produto", this.produto)
    this.produto=resposta
    //this.router.navigate(['/produtos'])
    console.log("Resposta" , this.produto)
     Swal.fire(
      'PARABÉNS!!',
      'Produto atualizado com sucesso!',
      'success'
    );

    }))
  }

  findById(): void {
         this.service.getById(this.id_produto).subscribe((resposta) => {
          console.log("findby", this.id_produto)
           this.produto = resposta;
           // Preencha o formulário com os valores do produto
           this.produtoForm.patchValue({

             nome: this.produto.nome,
             codigoDeBarra: this.produto.codigoDeBarra,
             preco: this.produto.preco,
           });
         });
      }
  cancel(){
    this.router.navigate(['/produtos'])
  }




}

//   produto : Produto={
//     id: 0,
//     nome: '',
//     codigoDeBarra: '',
//     preco: 0

//   }

//   produtoSelecionado: Produto ={
//     id: 0,
//     nome: '',
//     codigoDeBarra: '',
//     preco: 0
//   }
//  id_produto = '';


//   produtos :Produto[]=[]



//   constructor(
//     private router: Router,
//     private service: ProdutosService,
//     private route: ActivatedRoute,

//   ) {

//   }


//   ngOnInit(): void {
//     this.id_produto = this.route.snapshot.paramMap.get('id')!;
//     this.findById();
//   }

//   produtoForm = new FormGroup({
//     nome: new FormControl('', Validators.required),
//     codigoDeBarra: new FormControl('', Validators.maxLength(12)),
//     preco: new FormControl(0)
//   });



//   findAll():void{
//     this.service.findAll().subscribe(resposta =>{
//       this.produtos = resposta
//     })
//   }





//   update(): void {
//     this.produto = this.produtoForm.value as unknown as Produto; // Atualize o objeto Produto com os valores do formulário
//     this.service.update(this.produtoSelecionado).subscribe((resposta) => {
//       this.produto=resposta
//       this.router.navigate(['produtos']);
//     });
//   }

//   findById(): void {
//     this.service.getById(this.id_produto).subscribe((resposta) => {
//       this.produto = resposta;
//       // Preencha o formulário com os valores do produto
//       this.produtoForm.patchValue({

//         nome: this.produto.nome,
//         codigoDeBarra: this.produto.codigoDeBarra,
//         preco: this.produto.preco,
//       });
//     });
//   }

//   cancel() {
//     this.router.navigate(['produtos']);
//   }
// }

// id_produto=''

// produto: Produto={
//   nome: '',
//   codigoDeBarra: '',
//   preco: 0
// }

// nome = new FormControl ('', [Validators.minLength(5)]);
// quantidade = new FormControl ('', [Validators.minLength(1)])

// constructor(
//   private router: Router,
//   private service: ProdutosService,
//   private route: ActivatedRoute
// ){

// }
// produtoForm = new FormGroup({
//   nome: new FormControl('', Validators.required),
//   codigoDeBarra: new FormControl('', Validators.maxLength(12)),
//   preco: new FormControl(0)
// });

// ngOnInit(): void{
//   this.id_produto = this.route.snapshot.paramMap.get('id')!
//   this.findById()

// }
// update():void{
//   this.service.update(this.produto).subscribe((resposta =>{
//    this.router.navigate(['produto'])


//   })
//   )

// }

// findById():void{
//   this.service.getById(this.produto).subscribe(resposta =>{
//     this.produto=resposta
//   })
// }

// cancel(){
//   this.router.navigate(['material'])
// }

// errorValidName(){
//   if(this.nome.invalid){
//     return 'O nome é Obrigatório'
//   }
//   return false;
// }

// errorValidQuantidade(){
//   if(this.quantidade.invalid){
//     return 'A quantidade é obrigatoria'
//   }
//   return false
// }





