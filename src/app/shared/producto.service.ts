import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl = 'http://localhost:8080/api/v1';
  constructor(private httpClient: HttpClient) { };
  
  ajustarPrecioListaDeProductos(productoList: Producto[]) {
    throw new Error('Method not implemented.');
  }
  obtenerListaDeProductos() {
    throw new Error('Method not implemented.');
  }
  productosList: Producto[] | undefined;

  
  getProductoPorId(productId: any): Producto[]  {
    this.productosList = this.productos.filter(el => el.id== productId);
    return this.productosList;
   // return this.productos.find(producto => producto.id === productId);
  }
  getProductosPorCategoria(category: string): Producto[] {
    return this.productos.filter(producto => producto.categoria === category);
  }

  private productos: Producto[] = [ ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getProductosPorMarca(marca: string):Producto[]{
    return this.productos.filter(producto => producto.marca === marca);

    }
  }

