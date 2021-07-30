//------------>Componente responsável pelo carrinho<-----------
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//CartServiceclasse, defina uma itemspropriedade para armazenar a matriz dos produtos atuais no carrinho.
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}
  // O addToCart() método anexa um produto a uma matriz de items.
  addToCart(product: Product) {
    this.items.push(product);
  }
  //O getItems() método coleta os itens que os usuários adicionam ao carrinho e retorna cada item com sua quantidade associada.
  getItems() {
    return this.items;
  }
 // O clearCart() método retorna uma matriz vazia de itens, que esvazia o carrinho.
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}


