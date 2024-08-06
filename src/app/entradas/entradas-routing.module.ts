import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutpageComponent } from './pages/layoutpage/layoutpage.component';
import { ListpageComponent } from './pages/listpage/listpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { VehiclepageComponent } from './pages/vehiclepage/vehiclepage.component';
import { DailypageComponent } from './pages/dailypage/dailypage.component';
import { NotificacionespageComponent } from './pages/notificacionespage/notificacionespage.component';
import { HelpComponent } from './pages/help/help.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PasswordRecoverypageComponent } from '../auth/pages/password-recoverypage/password-recoverypage.component';
import { RegistroProveedorpageComponent } from './pages/registro-proveedorpage/registro-proveedorpage.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutpageComponent,
    children: [
    {path:'registro', component: RegisterpageComponent},
    {path:'veiculo', component:VehiclepageComponent},
    {path:'daily', component:DailypageComponent},
    {path:'list', component:ListpageComponent},
    {path:'noti',component:NotificacionespageComponent},
    {path:'help', component:HelpComponent},
    {path:'proveedor', component:RegistroProveedorpageComponent},
    {path:'recovery', component:PasswordRecoverypageComponent},
    {path: 'perfil', component:ProfileComponent },
    {path:'**',redirectTo:'list'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradasRoutingModule { }
