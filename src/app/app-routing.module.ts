import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

const routes: Routes = [
  {path: '',component:ListaProductosComponent},
  {path: 'producto/id',component:DetalleProductoComponent},
  {path:'productos/:category',component: ListaProductosComponent},
  {path:'detalle-producto',component: DetalleProductoComponent},
  {path:'../assets/imagenes/Produto_1.jpg',component: DetalleProductoComponent},



 /* {
    path: 'lista-productos/marcas/peugeot',
    component: MarcasComponent,
    data:{marca: 'Peugeot'}
  },
  {
    path:'lista-productos/marcas/fiat',
    component: MarcasComponent,
    data: {marca: 'Fiat'}
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
