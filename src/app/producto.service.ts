import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 private imagenURL= "http://localhost:8080/api/v1/catalogos";
  constructor(private httpClient: HttpClient) { }

  obtenerListaDeProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.imagenURL}`);
  }

  

  
}

