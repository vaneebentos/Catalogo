import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { AppComponent } from './app.component';

/* La variable `const rutas: rutas` es una matriz de objetos de ruta.Cada objeto de ruta representa un
ruta específica en la aplicación.*/
const routes: Routes = [
  {path: '',component:ListaProductosComponent},
  {path: 'lista-productos',component:ListaProductosComponent},
  {path: 'lista-productos/:grupo/:marca',component:ListaProductosComponent},
  {path: 'producto/:id',component:DetalleProductoComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
