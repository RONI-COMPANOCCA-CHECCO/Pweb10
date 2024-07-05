import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  // Rutas para otros componentes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
