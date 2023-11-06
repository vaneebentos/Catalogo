import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  @Input() productoList: Producto[];
  public productoAll: Producto[];
  public porcentaje: number;
  public producto: Producto;
  public precioAnterior: number;

  data: any = {};

 

  constructor(
    private productoService: ProductoService,
    private http: HttpClient,
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private apiService : ApiService,
    @Inject(LOCALE_ID) private localeId: string, // Inyecta el LOCALE_ID

   
  ) {
    this.localeId = this.localeId; // Establece el locale en el constructor
  }

  ngOnInit(): void {
    this.LlenarData();
   }
  verDetalle(producto: Producto) {
    this.router.navigate(['/producto', producto.id]);
  }

LlenarData(){
  this.apiService.getData().subscribe(data => {
    this.data = data;
    console.log (this.data);
  })

}


}