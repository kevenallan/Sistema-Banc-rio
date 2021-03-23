import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL_USUARIOS='http://localhost:3000/usuarios';

  constructor(private httpClient:HttpClient) { 
  }
  listar(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }
  inserir(usuario:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.URL_USUARIOS,usuario)
  }
}
