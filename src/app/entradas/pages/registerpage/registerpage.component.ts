import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/usuario.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styles:
  `
  .container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

mat-card {
  width: 100%;
  padding: 20px;
  background-color: white;
}

mat-form-field {
  width: 100%;
  margin-bottom: 20px;
}

.button-container {
  text-align: center;
  margin-top: 20px;
}
  `
})
export class RegisterpageComponent implements OnInit {
  vehicleForm: FormGroup;
  selectedUserType: string = '';
  selectedCareer: string = '';

  careerGroups: { [key: string]: string[] } = {
    'administracion': ['GDA0631', 'GDA0632'],
    'turismo': ['GDT0631', 'GDT0632'],
    'entornos': ['GDE0631', 'GDE0632'],
    'software': ['GDS0631', 'GDS0632', 'GDS0633'],
    'diseno': ['GDD0631', 'GDD0632'],
    'mecatronica': ['GDM0631', 'GDM0632'],
    'procesos': ['GDP0631', 'GDP0632']
  };

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.vehicleForm = this.fb.group({
      userType: ['', Validators.required],
      controlNumber: [''],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      career: [''],
      group: ['']
    });
  }

  ngOnInit(): void {
    this.onUserTypeChange();
  }

  onUserTypeChange(): void {
    const userType = this.vehicleForm.value.userType;

    if (userType === 'student') {
      this.vehicleForm.addControl('controlNumber', this.fb.control('', Validators.required));
      this.vehicleForm.addControl('career', this.fb.control('', Validators.required));
      this.vehicleForm.addControl('group', this.fb.control('', Validators.required));
      this.vehicleForm.removeControl('birthDate'); // Remove Professor-specific field
    } else if (userType === 'teacher') {
      this.vehicleForm.removeControl('controlNumber');
    }
  }

  onCareerChange(): void {
    this.selectedCareer = this.vehicleForm.value.career;
  }

  onSubmit(): void {
    if (this.vehicleForm.valid) {
      const formData = this.vehicleForm.value;
      this.userService.registerUser(formData).subscribe(
        response => {
          console.log('Registro exitoso:', response);
          alert('Formulario enviado');
        },
        error => {
          console.error('Error al registrar usuario:', error);
          alert('Error al registrar usuario');
        }
      );
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  }
}
