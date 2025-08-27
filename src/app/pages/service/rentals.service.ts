import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Rental {
   IdRentals: string;
   nombre: string;
   apellidos: string;
   nombre_auditorio: string;
   fecha_inicio: string;
   fecha_final: string;
   importe_pago: string;
   comprobante_pago: string;
   fecha_comprobante: string;
   orden_pago: string;
   fecha_orden: string;
}

@Injectable({
   providedIn: 'root'
})

export class RentalService {
   getRentalsData(){
      return [
         {
            IdRentals: "RNT001",
            nombre: "Carlos",
            apellidos: "Ramírez Torres",
            nombre_auditorio: "Auditorio Principal",
            fecha_inicio: "2025-02-10",
            fecha_final: "2025-02-11",
            importe_pago: "1500.00",
            comprobante_pago: "C-1001",
            fecha_comprobante: "2025-02-05",
            orden_pago: "OP-2001",
            fecha_orden: "2025-02-06"
         },
         {
            IdRentals: "RNT002",
            nombre: "María",
            apellidos: "Gómez Salazar",
            nombre_auditorio: "Auditorio Ejecutivo",
            fecha_inicio: "2025-03-01",
            fecha_final: "2025-03-02",
            importe_pago: "1200.00",
            comprobante_pago: "C-1002",
            fecha_comprobante: "2025-02-25",
            orden_pago: "OP-2002",
            fecha_orden: "2025-02-26"
         },
         {
            IdRentals: "RNT003",
            nombre: "Luis",
            apellidos: "Fernández Díaz",
            nombre_auditorio: "Auditorio Cultural",
            fecha_inicio: "2025-04-15",
            fecha_final: "2025-04-15",
            importe_pago: "800.00",
            comprobante_pago: "C-1003",
            fecha_comprobante: "2025-04-10",
            orden_pago: "OP-2003",
            fecha_orden: "2025-04-11"
         },
         {
            IdRentals: "RNT004",
            nombre: "Ana",
            apellidos: "Lopez Rivera",
            nombre_auditorio: "Auditorio Norte",
            fecha_inicio: "2025-05-20",
            fecha_final: "2025-05-21",
            importe_pago: "1350.00",
            comprobante_pago: "C-1004",
            fecha_comprobante: "2025-05-15",
            orden_pago: "OP-2004",
            fecha_orden: "2025-05-16"
         },
         {
            IdRentals: "RNT005",
            nombre: "Jorge",
            apellidos: "Castillo Vargas",
            nombre_auditorio: "Auditorio Universitario",
            fecha_inicio: "2025-06-05",
            fecha_final: "2025-06-06",
            importe_pago: "2000.00",
            comprobante_pago: "C-1005",
            fecha_comprobante: "2025-05-30",
            orden_pago: "OP-2005",
            fecha_orden: "2025-05-31"
         },
         {
            IdRentals: "RNT006",
            nombre: "Lucía",
            apellidos: "Paredes Huamán",
            nombre_auditorio: "Auditorio Sur",
            fecha_inicio: "2025-07-12",
            fecha_final: "2025-07-13",
            importe_pago: "950.00",
            comprobante_pago: "C-1006",
            fecha_comprobante: "2025-07-08",
            orden_pago: "OP-2006",
            fecha_orden: "2025-07-09"
         },
         {
            IdRentals: "RNT007",
            nombre: "Pedro",
            apellidos: "Alarcón Mejía",
            nombre_auditorio: "Auditorio Principal",
            fecha_inicio: "2025-08-01",
            fecha_final: "2025-08-02",
            importe_pago: "1750.00",
            comprobante_pago: "C-1007",
            fecha_comprobante: "2025-07-28",
            orden_pago: "OP-2007",
            fecha_orden: "2025-07-29"
         },
         {
            IdRentals: "RNT008",
            nombre: "Sofía",
            apellidos: "Mendoza Rojas",
            nombre_auditorio: "Auditorio Ejecutivo",
            fecha_inicio: "2025-08-15",
            fecha_final: "2025-08-16",
            importe_pago: "1100.00",
            comprobante_pago: "C-1008",
            fecha_comprobante: "2025-08-10",
            orden_pago: "OP-2008",
            fecha_orden: "2025-08-11"
         },
         {
            IdRentals: "RNT009",
            nombre: "Ricardo",
            apellidos: "Chávez León",
            nombre_auditorio: "Auditorio Cultural",
            fecha_inicio: "2025-09-05",
            fecha_final: "2025-09-06",
            importe_pago: "1400.00",
            comprobante_pago: "C-1009",
            fecha_comprobante: "2025-09-01",
            orden_pago: "OP-2009",
            fecha_orden: "2025-09-02"
         },
         {
            IdRentals: "RNT010",
            nombre: "Gabriela",
            apellidos: "Silva Campos",
            nombre_auditorio: "Auditorio Universitario",
            fecha_inicio: "2025-10-20",
            fecha_final: "2025-10-21",
            importe_pago: "2100.00",
            comprobante_pago: "C-1010",
            fecha_comprobante: "2025-10-15",
            orden_pago: "OP-2010",
            fecha_orden: "2025-10-16"
         },
         {
            IdRentals: "RNT011",
            nombre: "Andrés",
            apellidos: "Pérez Gutiérrez",
            nombre_auditorio: "Auditorio Norte",
            fecha_inicio: "2025-11-02",
            fecha_final: "2025-11-03",
            importe_pago: "1250.00",
            comprobante_pago: "C-1011",
            fecha_comprobante: "2025-10-28",
            orden_pago: "OP-2011",
            fecha_orden: "2025-10-29"
         },
         {
            IdRentals: "RNT012",
            nombre: "Valeria",
            apellidos: "Morales Suárez",
            nombre_auditorio: "Auditorio Sur",
            fecha_inicio: "2025-12-15",
            fecha_final: "2025-12-16",
            importe_pago: "1000.00",
            comprobante_pago: "C-1012",
            fecha_comprobante: "2025-12-10",
            orden_pago: "OP-2012",
            fecha_orden: "2025-12-11"
         }
      ]
   }

   constructor(private http:HttpClient) {}

      getRentalMini() {
        return Promise.resolve(this.getRentalsData().slice(0, 5));
      }

      getRentalSmall() {
         return Promise.resolve(this.getRentalsData().slice(0, 10));
      }

      getRentalMedium() {
         return Promise.resolve(this.getRentalsData().slice(0, 50));
      }

      getRentalLarge() {
         return Promise.resolve(this.getRentalsData().slice(0, 200));
      }
      getRentalXLarge() {
         return Promise.resolve(this.getRentalsData());
      }


}