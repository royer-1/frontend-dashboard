import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Doc = 'DNI' | 'Carnet de extranjeria' | 'Pasaporte' | 'RUC';
export interface Managed {
   idManaged: number;
   nombres: string;
   apellido1: string;
   apellido2: string;
   tipo_doc: string;
   numero_doc: string;
   razon_social: string;
   telefono: number | null;
   correo: string;
   direccion: string;
   ubigeo: string;
}

@Injectable({
   providedIn: 'root'
})

export class ManagedService {
   getManagedsData() {
      return [
         {
            idManaged: 1,
            nombres: "Carlos",
            apellido1: "Gonzales",
            apellido2: "Ramírez",
            tipo_doc: "DNI",
            numero_doc: "74859632",
            razon_social: "",
            telefono: 987456321,
            correo: "carlos.gonzales@example.com",
            direccion: "Av. Arequipa 1234, Lima",
            ubigeo: "150101"
         },
         {
            idManaged: 2,
            nombres: "María",
            apellido1: "Lopez",
            apellido2: "Quispe",
            tipo_doc: "DNI",
            numero_doc: "75984612",
            razon_social: "",
            telefono: 965874123,
            correo: "maria.lopez@example.com",
            direccion: "Jr. Ayacucho 567, Cusco",
            ubigeo: "080101"
         },
         {
            idManaged: 3,
            nombres: "Luis",
            apellido1: "Torres",
            apellido2: "Mendoza",
            tipo_doc: "DNI",
            numero_doc: "70234598",
            razon_social: "",
            telefono: 912345678,
            correo: "luis.torres@example.com",
            direccion: "Av. Grau 890, Arequipa",
            ubigeo: "040101"
         },
         {
            idManaged: 4,
            nombres: "Ana",
            apellido1: "Vargas",
            apellido2: "Huamán",
            tipo_doc: "DNI",
            numero_doc: "74125896",
            razon_social: "",
            telefono: 956478123,
            correo: "ana.vargas@example.com",
            direccion: "Calle Los Olivos 123, Trujillo",
            ubigeo: "130101"
         },
         {
            idManaged: 5,
            nombres: "Jorge",
            apellido1: "Ramirez",
            apellido2: "Flores",
            tipo_doc: "DNI",
            numero_doc: "78945612",
            razon_social: "Servicios Integrales Ramirez SAC",
            telefono: 998745632,
            correo: "jorge.ramirez@empresa.com",
            direccion: "Av. Larco 543, Miraflores",
            ubigeo: "150122"
         },
         {
            idManaged: 6,
            nombres: "Rosa",
            apellido1: "Huerta",
            apellido2: "Salazar",
            tipo_doc: "DNI",
            numero_doc: "76894523",
            razon_social: "",
            telefono: 987123654,
            correo: "rosa.huerta@example.com",
            direccion: "Jr. Moquegua 432, Puno",
            ubigeo: "210101"
         },
         {
            idManaged: 7,
            nombres: "Pedro",
            apellido1: "Castillo",
            apellido2: "Mamani",
            tipo_doc: "DNI",
            numero_doc: "75236985",
            razon_social: "",
            telefono: 913456987,
            correo: "pedro.castillo@example.com",
            direccion: "Av. La Marina 890, Tacna",
            ubigeo: "230101"
         },
         {
            idManaged: 8,
            nombres: "Lucía",
            apellido1: "Fernandez",
            apellido2: "Paredes",
            tipo_doc: "DNI",
            numero_doc: "70123654",
            razon_social: "Eventos y Producciones Fernandez SAC",
            telefono: 954123987,
            correo: "lucia.fernandez@eventos.com",
            direccion: "Av. Primavera 123, Surco",
            ubigeo: "150140"
         },
         {
            idManaged: 9,
            nombres: "Ricardo",
            apellido1: "Salas",
            apellido2: "Cruz",
            tipo_doc: "DNI",
            numero_doc: "78541236",
            razon_social: "",
            telefono: 987456159,
            correo: "ricardo.salas@example.com",
            direccion: "Jr. Amazonas 890, Cajamarca",
            ubigeo: "060101"
         },
         {
            idManaged: 10,
            nombres: "Gabriela",
            apellido1: "Medina",
            apellido2: "Lopez",
            tipo_doc: "DNI",
            numero_doc: "75489632",
            razon_social: "",
            telefono: 932145698,
            correo: "gabriela.medina@example.com",
            direccion: "Av. España 456, Chiclayo",
            ubigeo: "140101"
         },
         {
            idManaged: 11,
            nombres: "Felipe",
            apellido1: "Soto",
            apellido2: "Villanueva",
            tipo_doc: "RUC",
            numero_doc: "20457896321",
            razon_social: "Constructora Soto SAC",
            telefono: 921456789,
            correo: "felipe.soto@constructora.com",
            direccion: "Av. Colonial 890, Lima",
            ubigeo: "150101"
         },
         {
            idManaged: 12,
            nombres: "Claudia",
            apellido1: "Rios",
            apellido2: "Gutierrez",
            tipo_doc: "DNI",
            numero_doc: "74589631",
            razon_social: "",
            telefono: 987654321,
            correo: "claudia.rios@example.com",
            direccion: "Av. Central 321, Huancayo",
            ubigeo: "120101"
         }
      ]
   }

   constructor(private http:HttpClient) {}

   getManagedtMini() {
    return Promise.resolve(this.getManagedsData().slice(0, 5));
  }

  getManagedSmall() {
    return Promise.resolve(this.getManagedsData().slice(0, 10));
  }

  getManagedMedium() {
    return Promise.resolve(this.getManagedsData().slice(0, 50));
  }

  getManagedLarge() {
    return Promise.resolve(this.getManagedsData().slice(0, 200));
  }

  getManagedXLarge() {
    return Promise.resolve(this.getManagedsData());
  }

}