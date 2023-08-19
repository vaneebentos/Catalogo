import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Bajada } from './bajada';

@Injectable({
  providedIn: 'root'
})
export class BajadaService {
 private baseURL= "http://localhost:8080/api/v1/bajadas";
  constructor(private httpClient: HttpClient) { }

  obtenerListaDeBajadas(): Observable<Bajada[]> {
    return this.httpClient.get<Bajada[]>(`${this.baseURL}`);
  }

  
}

