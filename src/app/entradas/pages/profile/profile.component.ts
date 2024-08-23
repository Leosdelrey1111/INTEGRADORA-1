import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {
  usuario = {
    TipoUsuario: 'Estudiante',
    user: '',
    nombre: '',
    barCode: ''
  };

  @ViewChild('barcode', { static: false }) barcodeElement!: ElementRef; // Captura el elemento DOM del código de barras

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.getProfile();
  }

  navigateToRecovery() {
    this.router.navigate(['admin/changeP']);
  }

  getProfile() {
    const usr = sessionStorage.getItem('user');
    if (usr) {
      this.usuario = JSON.parse(usr);
      
      // Fuerza la detección de cambios
      this.cd.detectChanges();

      // Llama a generateBarcode después de la actualización del perfil
      this.generateBarcode();
    }
  }

  generateBarcode() {
    const barcodeValue = this.usuario.barCode;

    if (barcodeValue) {
      // Verifica si el elemento ViewChild está disponible
      if (this.barcodeElement) {
        JsBarcode(this.barcodeElement.nativeElement, barcodeValue, {
          format: 'CODE128',
          width: 2,
          height: 100,
          displayValue: true
        });
      } else {
        console.error('El elemento para el código de barras no está disponible.');
      }
    } else {
      console.error('El valor del código de barras no está disponible.');
    }
  }
}
