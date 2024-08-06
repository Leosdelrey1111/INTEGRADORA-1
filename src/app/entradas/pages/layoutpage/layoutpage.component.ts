import { Component } from '@angular/core';

@Component({
  selector: 'app-layoutpage',
  templateUrl: './layoutpage.component.html',
  styles: ``
})
export class LayoutpageComponent {

  public sidebarItems = [
    {label:'Listado', icon:'list',url:'./list'},
    {label:'Reporte',icon:'flag', url:'./daily'},
    {label:'Registro Proveedor',icon:'add',url: "/entradas/proveedor"},
    {label:'Añadir', icon:'directions_car', url:'./veiculo'},
    {label:'New Usuario',icon:'person_add',url:"./registro"},
    {label:'cerrar session',icon:'logout',url: "/auth/"}
  ]
  
  openUserMenu() {
    // Implement your user menu logic here
    console.log("User icon clicked");
  }

  openHelp() {
    // Implement your help logic here
    console.log("Help icon clicked");
  }

  openNotifications() {
    // Implement your notifications logic here
    console.log("Notifications icon clicked");
  }
}
