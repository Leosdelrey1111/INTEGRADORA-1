import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EntradaSalidaService } from '../../services/entrada-salida.service';
import { Vehiculo } from '../../interfaces/vehiculo';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styles: [
    `
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
    `
  ]
})
export class ListpageComponent /*implements OnInit*/ {
 /* parkedVehicles: any[] = [];
  maxParkingSpaces: number = 30;
  occupiedSpaces: number = 0;
  displayedColumns: string[] = ['type', 'licensePlate', 'entryTime', 'exitTime', 'userType', 'action'];
  dataSource = new MatTableDataSource<any>(this.parkedVehicles);

  constructor(private entradasService: EntradaSalidaService extends Vehiculo ) { }

  ngOnInit(): void {
    this.entradasService.getVehiculos()
      .subscribe(vehicles => {
        this.parkedVehicles = vehicles;
        this.updateOccupiedSpaces();
      });
  }

  filterEntries() {
    const startDate = new Date((document.getElementById('startDate') as HTMLInputElement).value);
    const endDate = new Date((document.getElementById('endDate') as HTMLInputElement).value);

    // Filtrar vehículos estacionados dentro del rango de fechas
    const filteredVehicles = this.parkedVehicles.filter(vehicle => {
      const entryTime = new Date(vehicle.entryTime);
      return entryTime >= startDate && entryTime <= endDate;
    });

    this.dataSource = new MatTableDataSource<any>(filteredVehicles);
  }

  vehicleEntered() {
    this.parkedVehicles.push({ type: 'Nuevo Vehículo', licensePlate: 'ZZZ-9999', entryTime: new Date(), exitTime: null, userType: 'Proveedor' });
    this.updateOccupiedSpaces();
  }

  vehicleExited(index: number) {
    this.parkedVehicles.splice(index, 1); // Eliminar vehículo del arreglo
    this.updateOccupiedSpaces();
  }

  updateOccupiedSpaces() {
    this.occupiedSpaces = this.parkedVehicles.length;
    this.dataSource = new MatTableDataSource<any>(this.parkedVehicles); // Actualizar dataSource
  }*/
}
