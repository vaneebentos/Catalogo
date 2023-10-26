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

  /**
   * La función NG ONInit llama a la función ObtenerProducto con dos parámetros comodín.
   */
  ngOnInit(): void {
    this.obtenerProducto('*', '*');
  }

  /* La variable `selectedFile` es de tipo` archivo` y se usa para almacenar el archivo seleccionado
   desde una entrada  elemento.*/
  selectedFile: File;

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  gotoDetalleProducto() {
    this.router.navigate(['/', 'detalle-producto']);
  }

  /**
   * La función "ObtenerProducto" recupera una lista de productos basados en el grupo y la marca especificados,
   * y luego filtra la lista en consecuencia.
   * @param {String} Grupo: el parámetro "Grupo" es una cadena que representa el grupo de productos que
   * quiero filtrar por catalogo.Puede ser un nombre de grupo específico o "*" para indicar todos los grupos.
   * @param {String} Marca: el parámetro "MARCA" es una cadena que representa la marca del producto.. Filtra aquellos
   *  elementos cuya marca es igual a la marca proporcionada como parámetro, o la todas las marca es '*', y lo mismo para
   * el grupo
   */
  obtenerProducto(grupo: String, marca: String): void {
    this.productoService.obtenerListaDeProductos().subscribe((dato) => {
      this.productoList = dato.filter((catalogo) => {
        return (
          (catalogo.marca == marca || marca == '*') &&
          (catalogo.grupo == grupo || grupo == '*')
        );
      });
      /*Verifica si cada elemento tiene una propiedad imagenUrl definida. Si es así, llama a la función getImagen 
        con la URL de la imagen y el índice actual en el bucle */
      this.productoList.forEach((el, index) => {
        if (el.imagenUrl != undefined) this.getImagen(el.imagenUrl, index);
      });
    });
  }

  /**
   * La función "VerDetallesDelProducto" navega a la página Detalles del producto con la ID especificada.
   * @param {número} ID: el parámetro de identificación es un número que representa el identificador único de un
   * producto.
   */
  verDetallesDelProducto(id: number) {
    this.router.navigate(['detalle-producto', id]);
  }

  /**
   * La función `Ajustarprecio` ajusta los precios de los productos en una lista basada en un porcentaje determinado
   * y actualiza los precios en la base de datos.
   * @param {any} porcentaje - el parámetro "Porcentaje" representa el porcentaje por el cual los precios
   * de los productos deben ajustarse.
   */
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

  /**
   * La función "Deshaceraajuste" ajusta los precios de los productos en una lista basada en un porcentaje determinado
   * y actualiza la lista en la base de datos.
   * @param {any} porcentaje - el parámetro "Porcentaje" representa el porcentaje por el cual los precios
   * de los productos deben ajustarse.
   */
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

  /**
   * La función `getImagen` recupera una imagen del 'Producto service' y la asigna al
   * 'ImagenBlob` propiedad de un producto en el array' Productolist`.
   * @param {String} Imagen: una cadena que representa el nombre o ruta del archivo de imagen.
   * @param {número} id: el parámetro `id` es un número que representa el índice del
   * array de `productolist` donde se almacenarán los datos de la imagen.
   * @returns El código está devolviendo el resultado del método `suscription`, que es una suscripción
   * objeto.
   */
  getImagen(imagen: String, id: number) {
    return this.productoService.getImagen(imagen).subscribe((data) => {
      const reader = new FileReader();

      reader.onload = () => {
        this.productoList[id].imagenBlob = reader.result as string;
      };
      reader.readAsDataURL(data);
    });
  }

  /**
   * La función "MostrartoDoslosproductos" navega a la ruta "/Lista-Productos".
   */
  mostrarTodosLosProductos(): void {
    this.router.navigate(['/lista-productos']);
  }

  /**
   * La función "Revertircambios" recupera la lista original de productos y recarga las imágenes.
   */
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
