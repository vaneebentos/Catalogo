import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from './producto.service';
import { Producto } from './producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public title = 'Catalogo';
  public productoList: Producto[];
  
  constructor(private router: Router, private productoService: ProductoService,
    ){}

  ngOnInit(): void {
    this.obtenerProducto 
  }
  gotoDetalleProducto (){
    this.router.navigate(['/','detalle-producto']);
  }

  obtenerProducto(grupo: String, marca: String): void {
    this.productoService.obtenerListaDeProductos().subscribe((dato) => {
      this.productoList = dato.filter((catalogo) => {
        return(catalogo.marca == marca || marca == '*') &&
          (catalogo.grupo == grupo || grupo == '*');
      });
    });
  }

  verDetallesDelProducto(id:number){
    this.router.navigate(['detalle-producto',id]);
  }
  
}
