import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/usuario.service'; // Ajusta la ruta según sea necesario
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styles: [` 
    .mat-h2, .mat-h3, .mat-body-strong {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .mat-form-field {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
    
    table {
      width: 100%;
    }
    
    button {
      margin-top: 10px;
    }
  `]
})
export class ListpageComponent implements OnInit {

  users: any[] = []; // Arreglo para usuarios
  maxParkingSpaces: number = 30;
  occupiedSpaces: number = 0; // Inicialmente espacios ocupados
  barcode: string = ''; // Campo para el código de barras

  displayedColumns: string[] = ['name', 'userType', 'entryTime', 'action'];
  dataSource = new MatTableDataSource<any>(this.users);

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.updateOccupiedSpaces();
  }

  addVehicleByBarcode(): void {
    if (this.barcode.trim()) {
      this.userService.searchUserByBarcode(this.barcode).subscribe(user => {
        if (user) {
          this.addUserToParking(user);
          this.barcode = ''; // Limpiar el campo de entrada
        } else {
          this.snackBar.open('Usuario no encontrado', 'Cerrar', { duration: 3000, panelClass: ['error-snackbar'] });
        }
      });
    }
  }

  addUserToParking(user: any): void {
    // Lógica para agregar un nuevo usuario basado en el código de barras encontrado
    this.users.push({
      name: user.nombre,
      userType: user.tipo,
      entryTime: new Date()
    });
    this.updateOccupiedSpaces();
    this.snackBar.open(`Vehículo ${user.nombre} ha entrado al estacionamiento`, 'Cerrar', { duration: 3000, panelClass: ['success-snackbar'] });
  }

  userExited(index: number) {
    const exitedUser = this.users[index];
    // Simular la salida de un usuario del estacionamiento
    this.users.splice(index, 1); // Eliminar usuario del arreglo
    this.updateOccupiedSpaces();
    this.snackBar.open(`Vehículo ${exitedUser.name} ha salido del estacionamiento`, 'Cerrar', { duration: 3000, panelClass: ['info-snackbar'] });
  }

  updateOccupiedSpaces() {
    this.occupiedSpaces = this.users.length;
    this.dataSource = new MatTableDataSource<any>(this.users); // Actualizar dataSource
  }

  filterEntries() {
    // Implementar lógica de filtrado basada en el rango de fechas (startDate y endDate)
    // Ejemplo:
    const startDate = (document.getElementById('startDate') as HTMLInputElement).value;
    const endDate = (document.getElementById('endDate') as HTMLInputElement).value;
    // Implementar lógica para filtrar el arreglo parkedVehicles basado en startDate y endDate
    // Esto es solo un marcador, la implementación real dependerá de tu backend o fuente de datos
  }
}
