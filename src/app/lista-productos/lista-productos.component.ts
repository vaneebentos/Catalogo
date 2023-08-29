import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-productos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  
  public productoAll: Producto[];
  public productoList: Producto[];
 
  public producto: Producto;

/*
  constructor(
    private productoService: ProductoService,
    private http: HttpClient,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit(): void {

    let grupo = this.rutaActiva.snapshot.params['grupo'];
    let marca = this.rutaActiva.snapshot.params['marca'];
    if (!grupo) grupo = '*';
    if (!marca) marca = '*';
    this.obtenerProducto(grupo, marca);
   

  }
 

  ngOnUpdate(): void {
    let grupo = this.rutaActiva.snapshot.params['grupo'];
    let marca = this.rutaActiva.snapshot.params['marca'];
    if (!grupo) grupo = '*';
    if (!marca) marca = '*';
    this.obtenerProducto(grupo, marca);
  }

  verDetalle(producto: Producto) {
    this.router.navigate(['/producto', producto.id]);
  }

  obtenerProducto(grupo: String, marca: String): void {
    this.productoService.obtenerListaDeProductos().subscribe((dato) => {
      this.productoAll = dato;
      this.productoList = dato.filter((catalogo) => {
        return (
          (catalogo.marca == marca || marca == '*') &&
          (catalogo.grupo == grupo || grupo == '*')
        );
      });
    });
  }

}*/
constructor(
  private productoService: ProductoService,
  private http: HttpClient,
  private router: Router,
  private rutaActiva: ActivatedRoute
) {}

ngOnInit(): void {
  this.updateProductoList(); // Inicialización al comienzo

  // Suscripción a cambios en los parámetros de la ruta
  this.rutaActiva.params.subscribe(params => {
    this.updateProductoList(); // Actualización en cada cambio de parámetros
  });
}

updateProductoList(): void {
  const grupo = this.rutaActiva.snapshot.params['grupo'] || '*';
  const marca = this.rutaActiva.snapshot.params['marca'] || '*';

  this.obtenerProducto(grupo, marca);
}

verDetalle(producto: Producto) {
  this.router.navigate(['/producto', producto.id]);
}

obtenerProducto(grupo: string, marca: string): void {
  this.productoService.obtenerListaDeProductos().subscribe((dato) => {
    this.productoAll = dato;
    this.productoList = dato.filter((catalogo) => {
      return (
        (catalogo.marca === marca || marca === '*') &&
        (catalogo.grupo === grupo || grupo === '*')
      );
    });

    // Marcar el componente para actualización
    // Esto es necesario para que los cambios se reflejen en la vista con OnPush
    this.producto = this.productoList[0]; // Por ejemplo, asignar la primera entrada
  });
}
}