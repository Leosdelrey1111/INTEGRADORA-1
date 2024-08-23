import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  validateUser(usr: string, cont: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/login', { user: usr, contrasena: cont });
  }

  registerUser(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario);
  }

  updateUser(id: string, usuario: Usuario): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, usuario);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  searchUser(query: { id?: string, name?: string }): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl + '/search', { params: query });
  }

  getAllUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl + '/all');
  }

  searchUserByBarcode(barcode: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/barcode/${barcode}`,);
  }
}
