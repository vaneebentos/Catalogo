import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

const routes: Routes = [
  {path: 'lista-productos',component:ListaProductosComponent},
  {path: 'lista-productos/:grupo/:marca',component:ListaProductosComponent},
  {path: 'producto/:id',component:DetalleProductoComponent},
  {path:'productos/:category',component: ListaProductosComponent},
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
