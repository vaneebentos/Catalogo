import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../shared/producto.model';
import {ProductoService  } from "../shared/producto.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  productos: Producto[] = [];
  downpipeProductos : Producto []= [];
   

/**
   * La función "capitalizeFirstletter" toma una cadena como entrada y devuelve la misma cadena con la
   * Primera carta capitalizada.
   * @param {string} text: el parámetro "texto" es una cadena que representa el texto que desea
   * capitalizar la primera letra de.
   * @returns la cadena de entrada con la primera letra capitalizada.
   */
  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  constructor(private productoService: ProductoService) {}
/**
  * La función NGONInit inicializa la matriz ProductOS con todos los productos y los descendentes
  * Array con productos filtrados por la marca 'Peugeot'.
  */
  ngOnInit() {
    this.productos = this.productoService.getProductos();
    this.downpipeProductos= this.productoService.getProductosPorMarca ('Peugeot');
  }
  desplegables: { [key:string ]: boolean} ={ 
    downpipe: false,
    escapes: false,
    multiples:false,
  };

  /* La función `mostraropciones (categoria: string)` se utiliza para mostrar las opciones para un específico producto
  en el menú desplegable.Se necesita un parámetro de 'categoría', que representa la categoría
  Nombre y establece la propiedad correspondiente en el objeto 'Desplegable` a' True '.Esto hará
  Las opciones para esa categoría visibles en el menú desplegable.*/
  mostrarOpciones(categoria:string){
    this.desplegables[categoria]= true;
    console.log('Mostrar opciones',categoria);
  }
 ocultarOpciones(categoria :string){
    this.desplegables[categoria]= false;
  }

  toggleDesplegable(categoria: string){
    this.desplegables[categoria]= !this.desplegables[categoria];
    console.log('Desplegable',categoria,this.desplegables[categoria]);
  }
  }