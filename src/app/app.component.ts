import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from './producto.service';
import { Producto } from './producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'Catalogo';
  public productoList: Producto[];
  precioAnterior: number | null = null;
  porcentaje: number = 0;

  constructor(
    private router: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.obtenerProducto('*', '*');

  }

  selectedFile: File;

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  gotoDetalleProducto() {
    this.router.navigate(['/', 'detalle-producto']);
  }

  obtenerProducto(grupo: String, marca: String): void {
    this.productoService.obtenerListaDeProductos().subscribe((dato) => {
      this.productoList = dato.filter((catalogo) => {
        return (
          (catalogo.marca == marca || marca == '*') &&
          (catalogo.grupo == grupo || grupo == '*')
        );
      });
      this.productoList.forEach((el, index) => {
        if (el.imagenUrl != undefined) this.getImagen(el.imagenUrl, index);
      });
    });
  }

  verDetallesDelProducto(id: number) {
    this.router.navigate(['detalle-producto', id]);
  }

  ajustarPrecio(porcentaje: any) {
    let precio: any;
    let precioDistribuidor: any;

    if (parseFloat(porcentaje) > 0) {
      for (let index = 0; index < this.productoList.length; index++) {
        precio = this.productoList[index].precio;
        precioDistribuidor = this.productoList[index].precioDistribuidor;

        this.productoList[index].precio = precio * (1 + porcentaje / 100);
        this.productoList[index].precioDistribuidor =
          precio * (1 + porcentaje / 100);
      }

      this.productoService
        .ajustarPrecioListaDeProductos(this.productoList)
        .subscribe(
          (productosActualizados) => {
            this.productoList = productosActualizados;
          },
          (error) => {
            console.error('Error al ajustar los precios:', error);
          }
        );
      this.obtenerProducto('*', '*');
    }
  }

  deshacerAjuste(porcentaje: any) {
    let precio: any;
    let precioDistribuidor: any;
    if (parseFloat(porcentaje) > 0) {
      for (let index = 0; index < this.productoList.length; index++) {
        precio = this.productoList[index].precio;
        precioDistribuidor = this.productoList[index].precioDistribuidor;

        this.productoList[index].precio = precio / (1 + porcentaje / 100);
        this.productoList[index].precioDistribuidor =
          precio / (1 + porcentaje / 100);
      }

      this.productoService
        .deshacerAjusteListaDeProductos(this.productoList)
        .subscribe(
          (productosActualizados) => {
            this.productoList = productosActualizados;
          },
          (error) => {
            console.error('Error al ajustar los precios:', error);
          }
        );
      this.obtenerProducto('*', '*');
    }
  }

  getImagen(imagen: String, id: number) {
    return this.productoService.getImagen(imagen).subscribe((data) => {
      const reader = new FileReader();

      reader.onload = () => {
        this.productoList[id].imagenBlob = reader.result as string;
      };
      reader.readAsDataURL(data);
    });
  }

  mostrarTodosLosProductos(): void {
    this.router.navigate(['/lista-productos']);
  }

  revertirCambios(): void {
    // Recupera la lista original de productos antes de aplicar los filtros
    this.productoService.obtenerListaDeProductos().subscribe((dato) => {
      this.productoList = dato;
  
      // Itera a través de la lista y carga las imágenes nuevamente
      this.productoList.forEach((el, index) => {
        if (el.imagenUrl != undefined) this.getImagen(el.imagenUrl, index);
      });
    });
  }
}
