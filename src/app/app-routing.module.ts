import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404pageComponent } from './shared/pages/error404page/error404page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'entradas',
    loadChildren: () => import('./entradas/entradas.module').then(m=> m.EntradasModule)
  },
  {
    path: 'admin',
    loadChildren:() => import('./admin/admin.module').then(m=> m.AdminModule)
  },
  {
    path: '404',
    component: Error404pageComponent
  },
  {
    path: '',
    redirectTo: 'entradas',
    pathMatch: 'full'

  },
  {
    path :'**',
    redirectTo:'404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
