import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


interface Notification {
  title: string;
  message: string;
  date: Date;
}
@Component({
  selector: 'app-notificacionespage',
  templateUrl: './notificacionespage.component.html',
  styles: ``
})
export class NotificacionespageComponent implements OnInit{

    notifications: Notification[] = [];
  
    ngOnInit(): void {
      // Simulación de notificaciones de reportes
      this.notifications = [
        { title: 'Reporte Usuario', message: 'Daños en mi coche .', date: new Date() },
        { title: 'Reporte Profesor', message: 'Daños en mi motocicleta.', date: new Date() },
        { title: 'Reporte Usuario', message: 'Robo de un casco.', date: new Date() }
      ];
    }
}

