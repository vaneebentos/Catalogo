import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductoService } from './shared/producto.service';
import {HttpClientModule} from '@angular/common/http';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    DetalleProductoComponent,
    NavbarComponent,
    ProductCardComponent,
   
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
