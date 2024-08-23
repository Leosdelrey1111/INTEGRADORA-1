import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passnewpage',
  templateUrl: './passnewpage.component.html',
  styles: ``
})
export class PassnewpageComponent implements OnInit {
  changePasswordForm: FormGroup;
  usuario: any = {
    nombre: 'Usuario de ejemplo',
    correo: 'usuario@example.com'
  }; // Ejemplo de información de usuario

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    // Aquí iría la lógica para enviar el correo
    this.router.navigate(['/admin/confnp']);
  }

  ngOnInit(): void {
  }

  changePassword() {
    // Implementación del método para cambiar la contraseña
  }

}