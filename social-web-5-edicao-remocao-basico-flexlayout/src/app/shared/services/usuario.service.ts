import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { USUARIOS } from '../model/USUARIOS';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios:Array<Usuario>;
  constructor() { 
    this.usuarios=USUARIOS
  }
  listar(): Array<Usuario>{
    return this.usuarios;
  }
  inserir(usuario:Usuario):void{
    this.usuarios.push(usuario);
  }
}
