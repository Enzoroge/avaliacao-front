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


  findById(id: number):Observable<Produto>{
    const url = `${this.api}/${id}`;
    return this.http.get<Produto>(url)
  }

  findAll():Observable<Produto[]>{
    const url = this.api;
    return this.http.get<Produto[]>(url)
  }

  delete(id: number):Observable<void>{
    const url = `${this.api}/${id}`;
    return this.http.delete<void>(url)

  }

}
