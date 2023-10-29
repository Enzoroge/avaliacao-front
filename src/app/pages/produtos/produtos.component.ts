import { AfterViewInit, Component } from '@angular/core';
import { Produto } from 'src/app/interfaces/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements AfterViewInit{

  produtos: Produto[]=[]



  constructor(
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

}
