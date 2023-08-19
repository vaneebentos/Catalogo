import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

const routes: Routes = [
  {path: 'lista-productos',component:ListaProductosComponent},
  {path: 'producto/:id',component:DetalleProductoComponent},
  {path:'productos/:category',component: ListaProductosComponent},
  {path:'detalle-producto',component: DetalleProductoComponent},
  {path:"escapes/:id",component: DetalleProductoComponent},
  {path:"downpipe/:id",component: DetalleProductoComponent},
  {path:"multiples/:id",component: DetalleProductoComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
