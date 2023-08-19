import { Component, OnInit } from '@angular/core';
import { Producto } from '../shared/producto.model';
import { ProductoService } from '../shared/producto.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { BajadaService } from '../bajada.service';
import { Bajada } from '../bajada';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  
  productos:Producto[] ;
  bajadas: Bajada [];
  product = [];
  constructor(
    private productoService: ProductoService,
    private route:ActivatedRoute,
    private router: Router,
    private bajadaService: BajadaService,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productoId = Number (params['id']); 
       this.productos = this.productoService.getProductoPorId(productoId);
       this.obtenerBajada ();

       console.log('Producto obtenido:',this.productos)
     
      if ( !this.productos){
       console.log('Producto no encontrado');
       }
      });
      
      }
    verDetalle(producto: Producto) {
    this.router.navigate(['/producto', producto.id]);
  }
 
   obtenerBajada( ) : void{
    this.bajadaService.obtenerListaDeBajadas ().subscribe(dato=> {
      this.bajadas= dato
    });
  }



}
