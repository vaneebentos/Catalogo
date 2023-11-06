import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
 private imagenURL= "http://localhost:8080/api/v1/catalogos";
 private URLUPDATE= "http://localhost:8080/api/v1/update";

 
  constructor(private httpClient: HttpClient) { }

 /**
  * La función "ObtenerListArProductos" devuelve una observable que obtiene una lista de productos de un
  * URL especificada.
  * @returns La función `obtenerListArProductos ()` está devolviendo una observable de tipo `ProductO []`.
  */
  obtenerListaDeProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.imagenURL}`);
  }

  /**
   * La función "Ajustarprecio lista de productos" toma una variedad de productos y actualiza sus precios
   * Uso de una solicitud de put HTTP.
   * @param {ProductO []} ProductOS: un array de objetos Producto.
   * @returns un tipo de producto observable [].
   */
  ajustarPrecioListaDeProductos(productos: Producto[]): Observable<Producto[]> {
    return this.httpClient.put<Producto[]>(`${this.URLUPDATE}`, productos);
  }
  /**
   * La función "deshacer ajuste de lista de productos" toma un array de objetos "Producto" y envía una PUT
   * Solicitar para actualizar la lista de productos.
   * @param {ProductO []} ProductOS - El parámetro "ProductOS" es un array de tipo "Producto []".
   * @returns un tipo de producto observable [].
   * 
 * * // * `Observable <ProductO []>` está especificando el
  Tipo de devolución de las funciones en el
  Clase `Producto service`.Indica que
  las funciones devolverán un observable
  Eso emite una variedad de objetos 'ProductO`.*/

  deshacerAjusteListaDeProductos(productos: Producto[]): Observable<Producto[]> {
    return this.httpClient.put<Producto[]>(`${this.URLUPDATE}`, productos);
  }

  /* La función `getImagen` se usa para recuperar una imagen del servidor.Se necesita un 'nombre de imaginación'
  Parámetro del tipo `string` y devuelve un` observable` de tipo `blob`.Hace que un http obtenga
  Solicitud a la URL especificada (`$ {this.Imagenurl}/Imagen/`) y establece el `ResponseTetype` '
  a `'blob' 'para indicar que la respuesta debe tratarse como una blob binaria.*/
   getImagen(imageName: String): Observable<Blob>{
  return this.httpClient.get(`${this.imagenURL}/imagen/${imageName}`, { responseType: 'blob' });
   }

   mostrarTodosLosProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.imagenURL}`);
   }

}
