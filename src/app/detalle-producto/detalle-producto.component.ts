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

  producto: Producto | undefined;
  mostrarDetalles: boolean = false;
  imagenUrl: string | undefined; // Variable para almacenar la URL de la imagen

  constructor(
    private productoServicio: ProductoService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Obtener el producto del servicio o de la ruta
    this.router.params.subscribe(params => {
      const productId = Number(params['id']);
      this.producto = this.productoServicio.getProductoPorId(productId)[0];
 });
    }
      // Llamar al servicio para obtener la URL de la imagen
    /*  this.productoServicio.obtenerUrlDeImagen(productId).subscribe(url => {
        this.imagenUrl = url;
     
  }*/
}
