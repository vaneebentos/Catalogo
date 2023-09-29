import { Component, Input, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private productoService: ProductoService,
    private http: HttpClient,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
   }
  verDetalle(producto: Producto) {
    this.router.navigate(['/producto', producto.id]);
  }
}