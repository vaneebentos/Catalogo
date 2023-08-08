import { Component, OnInit } from '@angular/core';
import { Producto } from '../shared/producto.model';
import { ProductoService } from '../shared/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto:Producto | undefined;
  mostrarDetalles = false;

  

 /*  productos: Producto [] =[
    {
    nombre:'Downpipe Partner',
    precio: 10,
    descripcion: 'descripcion 1',
    imagenes:[ '../assets/imagenes/Producto_1.jpg','../assets/imagenes/Producto_1-2.jpg'],
  },]
*/
  

  constructor(
    private productoServicio:ProductoService,
    private router:ActivatedRoute,
  ) { }

  ngOnInit() :void{// Obtener el producto del servicio o de la ruta
     
    //para escuchar los cambios en los parámetros de la ruta. 
    this.router.params.subscribe(params => {
      const productId = params ['id'];
      this.producto= this.productoServicio.getProductoPorId(productId);
      console.log('Producto:', this.producto);
    });
  }

}
