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

 private baseUrl = 'http://localhost:8080/api/v1';
  constructor(private httpClient: HttpClient) { }

  obtenerListaDeProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.imagenURL}`);
  }

  ajustarPrecioListaDeProductos(productos: Producto[]): Observable<Producto[]> {
    return this.httpClient.put<Producto[]>(`${this.URLUPDATE}`, productos);
  }
  deshacerAjusteListaDeProductos(productos: Producto[]): Observable<Producto[]> {
    return this.httpClient.put<Producto[]>(`${this.URLUPDATE}`, productos);
  }

getImagen(imageName: String): Observable<Blob>{
  return this.httpClient.get(`${this.imagenURL}/imagen/${imageName}`, { responseType: 'blob' });
}

}
