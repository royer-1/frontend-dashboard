import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Customer {
   id_cliente: number;
   nombres: string;
   apellidos: string;
   tipo_doc: string;
   documento: string;
   telefono: number;
   email: string;
   fecha_registro: string;
}

@Injectable()

export class CustomerService {

   getCustomersData(){
      return [
         {
            id_cliente: 1,
            nombres: 'Luis Marcelo',
            apellidos: 'Garcia Lopez',
            tipo_doc: 'DNI',
            documento: '76280096',
            telefono: 987654321,
            email: 'luis_12@gmail.com',
            fecha_registro: '2018-06-11'
         },
         {
            id_cliente: 2,
            nombres: 'María Fernanda',
            apellidos: 'Torres Ramos',
            tipo_doc: 'DNI',
            documento: '45329876',
            telefono: 912345678,
            email: 'maria.torres@gmail.com',
            fecha_registro: '2019-03-22'
         },
         {
            id_cliente: 3,
            nombres: 'José Antonio',
            apellidos: 'Pérez Medina',
            tipo_doc: 'DNI',
            documento: '50876932',
            telefono: 989765432,
            email: 'josep.medina@hotmail.com',
            fecha_registro: '2020-11-05'
         },
         {
            id_cliente: 4,
            nombres: 'Lucía Alejandra',
            apellidos: 'Ramírez Soto',
            tipo_doc: 'Carnet de Extranjería',
            documento: 'CE189234',
            telefono: 913456789,
            email: 'lucia.ramirez@outlook.com',
            fecha_registro: '2021-07-14'
         },
         {
            id_cliente: 5,
            nombres: 'Carlos Enrique',
            apellidos: 'Flores Delgado',
            tipo_doc: 'DNI',
            documento: '72134567',
            telefono: 986543210,
            email: 'cflores.d@gmail.com',
            fecha_registro: '2022-01-29'
         },
         {
            id_cliente: 6,
            nombres: 'Valeria Sofia',
            apellidos: 'Muñoz Herrera',
            tipo_doc: 'Pasaporte',
            documento: 'P12345678',
            telefono: 998877665,
            email: 'valeria.mh@correo.com',
            fecha_registro: '2023-09-17'
         },
         {
            id_cliente: 7,
            nombres: 'Andrés Felipe',
            apellidos: 'Rojas Peña',
            tipo_doc: 'DNI',
            documento: '73450921',
            telefono: 911234567,
            email: 'andres.rojas@gmail.com',
            fecha_registro: '2021-04-18'
         },
         {
            id_cliente: 8,
            nombres: 'Camila Andrea',
            apellidos: 'Vega Salinas',
            tipo_doc: 'DNI',
            documento: '78543290',
            telefono: 927654321,
            email: 'camila.vega@hotmail.com',
            fecha_registro: '2020-09-10'
         },
         {
            id_cliente: 9,
            nombres: 'Santiago Manuel',
            apellidos: 'Herrera Gómez',
            tipo_doc: 'Carnet de Extranjería',
            documento: 'CE562743',
            telefono: 934567890,
            email: 'santi.herrera@gmail.com',
            fecha_registro: '2019-12-25'
         },
         {
            id_cliente: 10,
            nombres: 'Paola Milagros',
            apellidos: 'Cruz Torres',
            tipo_doc: 'Pasaporte',
            documento: 'P87654321',
            telefono: 915678234,
            email: 'paola.cruz@gmail.com',
            fecha_registro: '2022-06-30'
         },
         {
            id_cliente: 11,
            nombres: 'Renato Alonso',
            apellidos: 'Martínez Silva',
            tipo_doc: 'DNI',
            documento: '76341209',
            telefono: 987612345,
            email: 'renato.ms@correo.com',
            fecha_registro: '2018-11-08'
         },
         {
            id_cliente: 12,
            nombres: 'Daniela Lucia',
            apellidos: 'Morales Cabrera',
            tipo_doc: 'DNI',
            documento: '75439812',
            telefono: 922334455,
            email: 'daniela.mc@gmail.com',
            fecha_registro: '2020-02-19'
         },
         {
            id_cliente: 13,
            nombres: 'Fernando José',
            apellidos: 'Guzmán Paredes',
            tipo_doc: 'Carnet de Extranjería',
            documento: 'CE298374',
            telefono: 930123456,
            email: 'fernando.gp@hotmail.com',
            fecha_registro: '2017-05-03'
         },
         {
            id_cliente: 14,
            nombres: 'Natalia Isabel',
            apellidos: 'Quispe Huamán',
            tipo_doc: 'DNI',
            documento: '76893210',
            telefono: 944556677,
            email: 'natalia.qh@correo.com',
            fecha_registro: '2019-10-14'
         },
         {
            id_cliente: 15,
            nombres: 'Kevin Alexander',
            apellidos: 'Sánchez Valdivia',
            tipo_doc: 'DNI',
            documento: '75239018',
            telefono: 956789123,
            email: 'kevin.sv@gmail.com',
            fecha_registro: '2023-03-27'
         },
         {
            id_cliente: 16,
            nombres: 'Ana Paula',
            apellidos: 'Chávez Ruiz',
            tipo_doc: 'Pasaporte',
            documento: 'P00123948',
            telefono: 912398745,
            email: 'ana.chavez@hotmail.com',
            fecha_registro: '2021-01-01'
         },
         {
            id_cliente: 17,
            nombres: 'Miguel Ángel',
            apellidos: 'Navarro Díaz',
            tipo_doc: 'DNI',
            documento: '78934561',
            telefono: 900112233,
            email: 'miguel.navarro@outlook.com',
            fecha_registro: '2020-07-16'
         },
         {
            id_cliente: 18,
            nombres: 'Karina Estefanía',
            apellidos: 'Delgado Flores',
            tipo_doc: 'Carnet de Extranjería',
            documento: 'CE736281',
            telefono: 913678901,
            email: 'karina.df@gmail.com',
            fecha_registro: '2016-08-22'
         },
         {
            id_cliente: 19,
            nombres: 'Juan Pablo',
            apellidos: 'López Mendoza',
            tipo_doc: 'DNI',
            documento: '70012345',
            telefono: 955443322,
            email: 'juan.lopez@gmail.com',
            fecha_registro: '2019-05-09'
         },
         {
            id_cliente: 20,
            nombres: 'Florencia Pilar',
            apellidos: 'García Alarcón',
            tipo_doc: 'DNI',
            documento: '74382910',
            telefono: 933221144,
            email: 'florencia.garcia@correo.com',
            fecha_registro: '2023-08-05'
         },
         {
            id_cliente: 21,
            nombres: 'Rodrigo Iván',
            apellidos: 'Castro León',
            tipo_doc: 'Pasaporte',
            documento: 'P77889966',
            telefono: 917263849,
            email: 'rodrigo.castro@gmail.com',
            fecha_registro: '2022-12-11'
         }
         
      ]
   }

   tipo_doc:string[] = ['DNI', 'Carnet de extranjeria', 'Pasaporte', 'Carné de permiso temporal', 'RUC']

   constructor(private http: HttpClient) {}

   getCustomerMini() {
        return Promise.resolve(this.getCustomersData().slice(0, 5));
   }

   getCustomerSmall() {
        return Promise.resolve(this.getCustomersData().slice(0, 10));
   }

   getCustomerMedium() {
        return Promise.resolve(this.getCustomersData().slice(0, 50));
   }

   getCustomerLarge() {
        return Promise.resolve(this.getCustomersData().slice(0, 200));
   }
   getCustomer() {
        return Promise.resolve(this.getCustomersData());
   }

   // generateCustomer(): Customer{
   //    const customer: Customer = {
   //       id_cliente: this.generateId(),
   //       nombres: this.
   //    }
   // }

   generateId(){

   }


}