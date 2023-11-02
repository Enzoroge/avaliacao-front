import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import Swal from 'sweetalert2'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarProdutoComponent } from './pages/cadastrar-produto/cadastrar-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { AtualizarProdutosComponent } from './pages/atualizar-produtos/atualizar-produtos.component';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask} from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastrarProdutoComponent,
    ProdutosComponent,
    AtualizarProdutosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe

  ],
  providers: [
    provideEnvironmentNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
