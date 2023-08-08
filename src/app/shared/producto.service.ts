// producto.service.ts
import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  getProductoPorId(productId: any): Producto | undefined {
    throw new Error('Method not implemented.');
  }
  getProductosPorCategoria(category: any): Producto[] {
    throw new Error('Method not implemented.');
  }

  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 10,
      descripcion: 'Esta es la descripción del producto 1.',
      imagenes: ['../assets/imagenes/producto_1jpg', '../assets/imagenes/producto_1-2.jpg']
    },
    {
      id:2,
      nombre: 'Producto 2',
      precio: 20,
      descripcion: 'Esta es la descripción del producto 2.',
      imagenes: ['../assets/imagenes/producto2-1.jpg', '../assets/imagenes/producto1-2.jpg']
    },
   
  ];

  getProductos(): Producto[] {
    return this.productos;
  }
}
