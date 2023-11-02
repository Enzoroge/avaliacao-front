import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CadastrarProdutoComponent } from './pages/cadastrar-produto/cadastrar-produto.component';


const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
  path: "produtos/cadastrar-produtos",
  component: CadastrarProdutoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
