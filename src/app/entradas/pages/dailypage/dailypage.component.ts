import { Component } from '@angular/core';
import { reporteService} from '../../services/reporte.service';  // Asegúrate de importar el servicio correctamente
import { reporte } from '../../interfaces/reporte'; 

@Component({
  selector: 'app-dailypage',
  templateUrl: './dailypage.component.html',
  styles: 
  `
  .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.mat-card {
  width: 400px;
  max-width: calc(100% - 20px); /* Ajusta el ancho máximo */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.full-width {
  width: 100%;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

  `
})
export class DailypageComponent {
  
  reporte: reporte = {
    fecha: '',
    totalVehiculos: 0,
    ingresosTotales: 0,
    tiempoPromedio: 0,
    eventosImportantes: '',
    observaciones: ''
  };

  constructor(private reporteService: reporteService) {}

  generarReporte() {
    this.reporteService.generarReporte(this.reporte).subscribe(
      response => {
        console.log('Reporte generado exitosamente:', response);
        // Manejar la respuesta del servidor, mostrar notificaciones, etc.
      },
      error => {
        console.error('Error al generar el reporte:', error);
        // Manejar el error, mostrar notificaciones, etc.
      }
    );
  }

  exportarPDF() {
    // Aquí deberías manejar el ID del reporte que quieres exportar
    this.reporteService.exportarPDF(1).subscribe(
      response => {
        const url = window.URL.createObjectURL(response);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'reporte.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error => {
        console.error('Error al exportar el reporte en PDF:', error);
      }
    );
  }

  cancelar() {
    // Aquí puedes limpiar el formulario o redirigir a otro componente
    this.reporte = {
      fecha: '',
      totalVehiculos: 0,
      ingresosTotales: 0,
      tiempoPromedio: 0,
      eventosImportantes: '',
      observaciones: ''
    };
  }
}
