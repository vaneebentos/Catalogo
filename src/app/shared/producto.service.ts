import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productosList: Producto[] | undefined;

  
  getProductoPorId(productId: any): Producto[]  {
    this.productosList = this.productos.filter(el => el.id== productId);
    alert(this.productosList.length)
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

