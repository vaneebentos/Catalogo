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

  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 10,
      descripcion: 'Esta es la descripción del producto 1.',
      imagenes: ['../assets/imagenes/producto_1jpg', '../assets/imagenes/producto_1-2.jpg'],
      categoria: 'downpipe',
      marca: 'peugeot' ,
      
    },
    {
      id:2,
      nombre: 'Producto 2',
      precio: 20,
      descripcion: 'Esta es la descripción del producto 2.',
      imagenes: ['../assets/imagenes/producto_1.jpg', '../assets/imagenes/producto_1-2.jpg'],
      categoria: 'escapes',
      marca:'fiat',
    },
   
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getProductosPorMarca(marca: string):Producto[]{
    return this.productos.filter(producto => producto.marca === marca);

    }
  }

