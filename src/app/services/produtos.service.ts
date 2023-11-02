import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../interfaces/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  api = "http://localhost:8083/produtos"

  constructor(
    private http: HttpClient
  ) { }

  create(produto: Produto):Observable<Produto>{
    const url = this.api
    return this.http.post<Produto>(url, produto);
  }


  getById(id: any):Observable<Produto>{
    const url = `${this.api}/${id}`
    return this.http.get<Produto>(url)
  }

  findAll():Observable<Produto[]>{
    const url = this.api;
    return this.http.get<Produto[]>(url)
  }

  delete(id: Produto):Observable<void>{
    const url = `${this.api}/${id.id}`;
    return this.http.delete<void>(url)

  }
  update(produto: Produto): Observable<Produto> {
    const url = `${this.api}/${produto.id}`;
    return this.http.put<Produto>(url, produto);
  }


}
