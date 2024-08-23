export interface EntradaSalida {
    idEntradaSalida?: number; // Optional for update operations
    idUsuario: number;
    idVehiculo: number;
    entrada: Date;
    salida?: Date;
  }
  