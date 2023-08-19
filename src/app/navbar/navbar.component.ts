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
   

  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productos = this.productoService.getProductos();
    this.downpipeProductos= this.productoService.getProductosPorMarca ('Peugeot');
  }
  desplegables: { [key:string ]: boolean} ={ 
    downpipe: false,
    escapes: false,
    multiples:false,
  };

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