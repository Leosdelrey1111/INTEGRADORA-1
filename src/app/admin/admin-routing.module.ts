import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutpageComponent } from './pages/layoutpage/layoutpage.component';
import { AddwpageComponent } from './pages/addwpage/addwpage.component';
import { PermisosComponent } from './pages/permisos/permisos.component';
import { NotipageComponent } from './pages/notipage/notipage.component';
import { PerfilpageComponent } from './pages/perfilpage/perfilpage.component';
import { PassrecopageComponent } from './pages/passrecopage/passrecopage.component';
import { PassnewpageComponent } from './pages/passnewpage/passnewpage.component';
import { ConfnwPpageComponent } from './pages/confnw-ppage/confnw-ppage.component';
import { RolespageComponent } from './pages/rolespage/rolespage.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutpageComponent,
    children: [
    {path:'registro', component: AddwpageComponent},
    {path:'permisos', component: PermisosComponent},
    {path:'noti', component: NotipageComponent},
    {path:'perfil', component:PerfilpageComponent},
    {path:'changeP', component: PassrecopageComponent},
    {path:'newP', component: PassnewpageComponent},
    {path:'confnp', component: ConfnwPpageComponent},
    {path:'roles',component:RolespageComponent},
    {path:'**',redirectTo:'registro'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
