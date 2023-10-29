import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.css']
})
export class ProdutosDeleteComponent {
  id_produto = ''

  produto : Produto={
    nome: '',
    codigoDeBarras: '',
    preco: 0

  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProdutosService
  ){

  }

  // ngOnInit():void{
  //   this.id_produto = this.route.snapshot.paramMap.get('id')!
  //   this.findById()
  // }

  // delete():void{
  //   this.service.delete(this.id_produto).subscribe(resposta =>{
  //     this.router.navigate(['produto'])
  //   })
  // }

  // findById():void{
  //   this.service.findById(this.id_produto).subscribe(resposta =>{
  //     this.produto=resposta
  //   })
  // }

}
