  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { ProdutosComponent } from './pages/produtos/produtos.component';
  import { CadastrarProdutoComponent } from './pages/cadastrar-produto/cadastrar-produto.component';
  import { AtualizarProdutosComponent } from './pages/atualizar-produtos/atualizar-produtos.component';

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
      path: "produtos/atualizar-produtos/:id",
      component: AtualizarProdutosComponent
    }

  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
