import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environments';
import { Usuario } from '../interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/usuarios'; // Cambia esto si tu ruta es diferente

  constructor(private http: HttpClient) {}

  // Método para registrar un nuevo usuario
  registerUser(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario);
  }
}
