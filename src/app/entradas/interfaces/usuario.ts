export interface Usuario {
    userType: 'student' | 'teacher';
    controlNumber?: string; // Opcional para profesores
    email: string;
    fullName: string;
    birthDate?: string; // Opcional para estudiantes
    career?: string; // Opcional para profesores
    group?: string; // Opcional para profesores
    // Agrega aquí otros campos específicos si es necesario
  }
  