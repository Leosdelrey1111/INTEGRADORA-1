export interface Usuario {
  userType: 'Estudiante' | 'Profesor';
  idUsuario: string;
  controlNumber?: string; // Opcional para profesores
  email: string;
  fullName: string;
  birthDate?: string; // Opcional para estudiantes
  career?: string; // Opcional para profesores
  groupo?: string; // Opcional para profesores
  codigo?:string;
  // Agrega aquí otros campos específicos si es necesario
}
