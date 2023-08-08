import { Component, OnInit } from '@angular/core';
import { Producto } from '../shared/producto.model';
import { ProductoService } from '../shared/producto.service'; // Asegúrate de que esta importación esté corregida
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  
  productos:Producto[] =[];


 /*
  productos: Producto[] = [
    {
      nombre: 'Downpipe Partner',
      precio: 10,
      descripcion: ' producto1',
      imagenes: ['../assets/imagenes/Producto_1.jpg' ,'../assets/imagenes/Producto_1-2.jpg']

    },
  ];
*/
  constructor(
    private productoService: ProductoService,
    private route:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const category = params['category']; // es para obtener la categoria de los parametros de la rutas  
     /* El código está verificando si el parámetro 'Categoría' está presente en la ruta.Si es así, llama
      El `getProductosporCategoria (categoría)` Método del 'ProductOservice' para obtener los productos
      filtrado por esa categoría.Si el parámetro 'Categoría' no está presente, llama al
      `getProductos ()` Método del 'ProductOservice' para obtener todos los productos.La resultante
      Luego se asignan los productos a la matriz 'ProductOS'.*/
      if (category){
        this.productos = this.productoService.getProductosPorCategoria(category);
       }else{
        this.productos = this.productoService.getProductos();
       }
      });
      
      }
    /**
     * La función "VerDetalle" navega a la página de detalles del producto con la ID de producto especificada.
     * @param {ProductO} ProductO - El parámetro "ProductO" es de tipo "ProductO".
     */
    verDetalle(producto: Producto) {
    this.router.navigate(['/detalle-producto', producto.id]);
  }
  
}
