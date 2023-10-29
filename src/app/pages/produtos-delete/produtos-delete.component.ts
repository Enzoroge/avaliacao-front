import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.css']
})
export class ProdutosDeleteComponent {
  id_produto =''

  produto : Produto={
    nome: '',
    codigoDeBarra: '',
    preco: 0

  }

  produtos: Produto[]=[]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProdutosService
  ){

  }

//   ngOnInit():void{
//     this.id_produto = this.route.snapshot.paramMap.get('id')!;
//     this.getById()
//   }

//   delete(produto: Produto):void{
//     this.service.delete(this.id_produto).subscribe(resposta =>{
//       this.router.navigate(['produtos'])
//       Swal.fire(
//         'PARABÉNS!!',
//         'Produto cadastrado com sucesso!',
//         'success'
//       );

//     })
//   }

//   getById():void{
//     this.service.getById(this.id_produto).subscribe(resposta =>{
//       this.produto=resposta
//     })
//   }

 }
