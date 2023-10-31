import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CadastrarProdutoComponent } from './pages/cadastrar-produto/cadastrar-produto.component';
import { ProdutosDeleteComponent } from './pages/produtos-delete/produtos-delete.component';
import { ProdutosUpdateComponent } from './pages/produtos-update/produtos-update.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
  path: "produtos/cadastrar-produtos",
  component: CadastrarProdutoComponent
  },
  {
    path: 'produtos-delete/:id',
    component: ProdutosDeleteComponent
  },
  {
    path: 'produtos/produtos-update/:id',
    component: ProdutosUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
