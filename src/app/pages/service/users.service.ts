import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
   idUser: number;
   nombre: string;
   tipo_doc: string;
   documento: string;
   correo: string;
   telefono: number | null;
   direccion: string;
   rol_user: string;
   usuario: string;
   password: string;
}

@Injectable({
   providedIn: 'root'
})

export class UserService {
   getUsersData() {
      return [
         {
            idUser: 1,
            nombre: "Juan Pérez",
            tipo_doc: "DNI",
            documento: "74859632",
            correo: "juan.perez@example.com",
            telefono: 987654321,
            direccion: "Av. Arequipa 1234, Lima",
            rol_user: "Administrador",
            usuario: "juanp",
            password: "admin123"
         },
         {
            idUser: 2,
            nombre: "María López",
            tipo_doc: "DNI",
            documento: "75984612",
            correo: "maria.lopez@example.com",
            telefono: 912345678,
            direccion: "Jr. Ayacucho 456, Cusco",
            rol_user: "Cliente",
            usuario: "marial",
            password: "cliente2025"
         },
         {
            idUser: 3,
            nombre: "Carlos Ramírez",
            tipo_doc: "DNI",
            documento: "70234598",
            correo: "carlos.ramirez@example.com",
            telefono: 923456789,
            direccion: "Calle Los Olivos 789, Trujillo",
            rol_user: "Empleado",
            usuario: "carlosr",
            password: "empleado456"
         },
         {
            idUser: 4,
            nombre: "Ana Torres",
            tipo_doc: "DNI",
            documento: "74125896",
            correo: "ana.torres@example.com",
            telefono: 934567890,
            direccion: "Av. Grau 321, Arequipa",
            rol_user: "Administrador",
            usuario: "anat",
            password: "securePass"
         },
         {
            idUser: 5,
            nombre: "Luis Castillo",
            tipo_doc: "DNI",
            documento: "78945612",
            correo: "luis.castillo@example.com",
            telefono: 945678901,
            direccion: "Jr. Puno 654, Piura",
            rol_user: "Cliente",
            usuario: "luisc",
            password: "passCliente"
         },
         {
            idUser: 6,
            nombre: "Sofía Herrera",
            tipo_doc: "DNI",
            documento: "76894523",
            correo: "sofia.herrera@example.com",
            telefono: 956789012,
            direccion: "Av. Tacna 852, Chiclayo",
            rol_user: "Empleado",
            usuario: "sofiah",
            password: "empleado789"
         }
      ]
   }

   constructor(private http:HttpClient) {}

   getUserMini() {
    return Promise.resolve(this.getUsersData().slice(0, 5));
  }

  getUserSmall() {
    return Promise.resolve(this.getUsersData().slice(0, 10));
  }

  getUserMedium() {
    return Promise.resolve(this.getUsersData().slice(0, 50));
  }

  getUserLarge() {
    return Promise.resolve(this.getUsersData().slice(0, 200));
  }

  getUserXLarge() {
    return Promise.resolve(this.getUsersData());
  }

}