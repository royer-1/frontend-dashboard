import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// export interface CronogramaPago {
//   idConograma: string;
//   periodo_inicio: string;
//   periodo_fin: string;
//   importe_alquiler: string;
//   importe_agua: string;
//   importe_luz: string;
//   fecha_limite_pago: string;
//   comprobante_pago: string;
//   fecha_comprobante: string;
//   orden_pago: string;
//   fecha_orden: string;
// }

export interface Contract {
  idContract: number;
  nombre: string;
  apellidos: string;
  nombre_inmueble: string;
  num_contrato: number | null;
  fecha_inicio: Date | null;
  fecha_final: Date | null;
  monto_alquiler: number | null;
  monto_agua: number | null;
  monto_luz: number | null;
  estado: string;
  periodo_inicio: Date | null;
  periodo_fin: Date | null;
  importe_alquiler: number | null;
  importe_agua: number | null;
  importe_luz: number | null;
  fecha_limite_pago: Date | null;
  comprobante_pago: string;
  fecha_comprobante: Date | null;
  orden_pago: string;
  fecha_orden: Date | null;
}

@Injectable({
   providedIn: 'root'
})

export class ContractService {
  getContractsData(){
    return [
      {
        idContract: 1,
        nombre: "Carlos",
        apellidos: "Ramírez Torres",
        nombre_inmueble: "Quiosco Central",
        num_contrato: 2025001,
        fecha_inicio: new Date("2025-01-10"),
        fecha_final: new Date("2025-06-10"),
        monto_alquiler: 800.00,
        monto_agua: 50.00,
        monto_luz: 120.00,
        estado: "Vigente",
        periodo_inicio: new Date("2025-01-01"),
        periodo_fin: new Date("2025-01-31"),
        importe_alquiler: 800.00,
        importe_agua: 50.00,
        importe_luz: 120.00,
        fecha_limite_pago: new Date("2025-01-31"),
        comprobante_pago: "CP-0001",
        fecha_comprobante: new Date("2025-01-28"),
        orden_pago: "OP-0001",
        fecha_orden: new Date("2025-01-29")
      },
      {
        idContract: 2,
        nombre: "María",
        apellidos: "Gómez Salazar",
        nombre_inmueble: "Auditorio Principal",
        num_contrato: 2025002,
        fecha_inicio: new Date("2025-02-01"),
        fecha_final: new Date("2025-07-01"),
        monto_alquiler: 2500.00,
        monto_agua: 150.00,
        monto_luz: 300.00,
        estado: "Vigente",
        periodo_inicio: new Date("2025-02-01"),
        periodo_fin: new Date("2025-02-28"),
        importe_alquiler: 2500.00,
        importe_agua: 150.00,
        importe_luz: 300.00,
        fecha_limite_pago: new Date("2025-02-28"),
        comprobante_pago: "CP-0002",
        fecha_comprobante: new Date("2025-02-25"),
        orden_pago: "OP-0002",
        fecha_orden: new Date("2025-02-26")
      },
      {
        idContract: 3,
        nombre: "Luis",
        apellidos: "Fernández Díaz",
        nombre_inmueble: "Almacén Pequeño A",
        num_contrato: 2025003,
        fecha_inicio: new Date("2025-03-05"),
        fecha_final: new Date("2025-08-05"),
        monto_alquiler: 600.00,
        monto_agua: 30.00,
        monto_luz: 80.00,
        estado: "Vigente",
        periodo_inicio: new Date("2025-03-01"),
        periodo_fin: new Date("2025-03-31"),
        importe_alquiler: 600.00,
        importe_agua: 30.00,
        importe_luz: 80.00,
        fecha_limite_pago: new Date("2025-03-31"),
        comprobante_pago: "CP-0003",
        fecha_comprobante: new Date("2025-03-29"),
        orden_pago: "OP-0003",
        fecha_orden: new Date("2025-03-30")
      },
      {
        idContract: 4,
        nombre: "Ana",
        apellidos: "Lopez Rivera",
        nombre_inmueble: "Servicios Higiénicos Norte",
        num_contrato: 2025004,
        fecha_inicio: new Date("2025-04-10"),
        fecha_final: new Date("2025-09-10"),
        monto_alquiler: 700.00,
        monto_agua: 100.00,
        monto_luz: 90.00,
        estado: "Pendiente",
        periodo_inicio: new Date("2025-04-01"),
        periodo_fin: new Date("2025-04-30"),
        importe_alquiler: 700.00,
        importe_agua: 100.00,
        importe_luz: 90.00,
        fecha_limite_pago: new Date("2025-04-30"),
        comprobante_pago: "CP-0004",
        fecha_comprobante: new Date("2025-04-27"),
        orden_pago: "OP-0004",
        fecha_orden: new Date("2025-04-28")
      },
      {
        idContract: 5,
        nombre: "Pedro",
        apellidos: "Martínez Paredes",
        nombre_inmueble: "Quiosco Norte",
        num_contrato: 2025005,
        fecha_inicio: new Date("2025-05-15"),
        fecha_final: new Date("2025-10-15"),
        monto_alquiler: 850.00,
        monto_agua: 60.00,
        monto_luz: 110.00,
        estado: "Vigente",
        periodo_inicio: new Date("2025-05-01"),
        periodo_fin: new Date("2025-05-31"),
        importe_alquiler: 850.00,
        importe_agua: 60.00,
        importe_luz: 110.00,
        fecha_limite_pago: new Date("2025-05-31"),
        comprobante_pago: "CP-0005",
        fecha_comprobante: new Date("2025-05-29"),
        orden_pago: "OP-0005",
        fecha_orden: new Date("2025-05-30")
      },
      {
        idContract: 6,
        nombre: "Lucía",
        apellidos: "Hernández Castillo",
        nombre_inmueble: "Auditorio Secundario",
        num_contrato: 2025006,
        fecha_inicio: new Date("2025-06-20"),
        fecha_final: new Date("2025-12-20"),
        monto_alquiler: 1800.00,
        monto_agua: 120.00,
        monto_luz: 250.00,
        estado: "Vigente",
        periodo_inicio: new Date("2025-06-01"),
        periodo_fin: new Date("2025-06-30"),
        importe_alquiler: 1800.00,
        importe_agua: 120.00,
        importe_luz: 250.00,
        fecha_limite_pago: new Date("2025-06-30"),
        comprobante_pago: "CP-0006",
        fecha_comprobante: new Date("2025-06-28"),
        orden_pago: "OP-0006",
        fecha_orden: new Date("2025-06-29")
      },
      {
        idContract: 7,
        nombre: "Fernando",
        apellidos: "Sánchez Torres",
        nombre_inmueble: "Almacén Grande B",
        num_contrato: 2025007,
        fecha_inicio: new Date("2025-07-25"),
        fecha_final: new Date("2026-01-25"),
        monto_alquiler: 1200.00,
        monto_agua: 90.00,
        monto_luz: 200.00,
        estado: "Pendiente",
        periodo_inicio: new Date("2025-07-01"),
        periodo_fin: new Date("2025-07-31"),
        importe_alquiler: 1200.00,
        importe_agua: 90.00,
        importe_luz: 200.00,
        fecha_limite_pago: new Date("2025-07-31"),
        comprobante_pago: "CP-0007",
        fecha_comprobante: new Date("2025-07-29"),
        orden_pago: "OP-0007",
        fecha_orden: new Date("2025-07-30")
      },
      {
        idContract: 8,
        nombre: "Sofía",
        apellidos: "Cárdenas Ramos",
        nombre_inmueble: "Servicios Higiénicos Sur",
        num_contrato: 2025008,
        fecha_inicio: new Date("2025-08-10"),
        fecha_final: new Date("2026-02-10"),
        monto_alquiler: 650.00,
        monto_agua: 70.00,
        monto_luz: 95.00,
        estado: "Vigente",
        periodo_inicio: new Date("2025-08-01"),
        periodo_fin: new Date("2025-08-31"),
        importe_alquiler: 650.00,
        importe_agua: 70.00,
        importe_luz: 95.00,
        fecha_limite_pago: new Date("2025-08-31"),
        comprobante_pago: "CP-0008",
        fecha_comprobante: new Date("2025-08-28"),
        orden_pago: "OP-0008",
        fecha_orden: new Date("2025-08-29")
      },
      {
        idContract: 9,
        nombre: "Jorge",
        apellidos: "Vásquez León",
        nombre_inmueble: "Quiosco Este",
        num_contrato: 2025009,
        fecha_inicio: new Date("2025-09-01"),
        fecha_final: new Date("2026-03-01"),
        monto_alquiler: 900.00,
        monto_agua: 55.00,
        monto_luz: 100.00,
        estado: "Pendiente",
        periodo_inicio: new Date("2025-09-01"),
        periodo_fin: new Date("2025-09-30"),
        importe_alquiler: 900.00,
        importe_agua: 55.00,
        importe_luz: 100.00,
        fecha_limite_pago: new Date("2025-09-30"),
        comprobante_pago: "CP-0009",
        fecha_comprobante: new Date("2025-09-27"),
        orden_pago: "OP-0009",
        fecha_orden: new Date("2025-09-28")
      },
      {
        idContract: 10,
        nombre: "Elena",
        apellidos: "Morales Peña",
        nombre_inmueble: "Auditorio Cultural",
        num_contrato: 2025010,
        fecha_inicio: new Date("2025-10-05"),
        fecha_final: new Date("2026-04-05"),
        monto_alquiler: 2200.00,
        monto_agua: 180.00,
        monto_luz: 350.00,
        estado: "Vigente",
        periodo_inicio: new Date("2025-10-01"),
        periodo_fin: new Date("2025-10-31"),
        importe_alquiler: 2200.00,
        importe_agua: 180.00,
        importe_luz: 350.00,
        fecha_limite_pago: new Date("2025-10-31"),
        comprobante_pago: "CP-0010",
        fecha_comprobante: new Date("2025-10-29"),
        orden_pago: "OP-0010",
        fecha_orden: new Date("2025-10-30")
      },
      {
        idContract: 11,
        nombre: "Andrés",
        apellidos: "Paredes Ruiz",
        nombre_inmueble: "Almacén Mediano C",
        num_contrato: 2025011,
        fecha_inicio: new Date("2025-11-12"),
        fecha_final: new Date("2026-05-12"),
        monto_alquiler: 950.00,
        monto_agua: 85.00,
        monto_luz: 150.00,
        estado: "Pendiente",
        periodo_inicio: new Date("2025-11-01"),
        periodo_fin: new Date("2025-11-30"),
        importe_alquiler: 950.00,
        importe_agua: 85.00,
        importe_luz: 150.00,
        fecha_limite_pago: new Date("2025-11-30"),
        comprobante_pago: "CP-0011",
        fecha_comprobante: new Date("2025-11-28"),
        orden_pago: "OP-0011",
        fecha_orden: new Date("2025-11-29")
      },
      {
        idContract: 12,
        nombre: "Gabriela",
        apellidos: "Torres Silva",
        nombre_inmueble: "Quiosco Oeste",
        num_contrato: 2025012,
        fecha_inicio: new Date("2025-12-01"),
        fecha_final: new Date("2026-06-01"),
        monto_alquiler: 780.00,
        monto_agua: 65.00,
        monto_luz: 105.00,
        estado: "Vigente",
        periodo_inicio: new Date("2025-12-01"),
        periodo_fin: new Date("2025-12-31"),
        importe_alquiler: 780.00,
        importe_agua: 65.00,
        importe_luz: 105.00,
        fecha_limite_pago: new Date("2025-12-31"),
        comprobante_pago: "CP-0012",
        fecha_comprobante: new Date("2025-12-29"),
        orden_pago: "OP-0012",
        fecha_orden: new Date("2025-12-30")
      }
    ]
  }

   constructor(private http:HttpClient) {}

  getContractMini() {
    return Promise.resolve(this.getContractsData().slice(0, 5));
  }

  getContractSmall() {
    return Promise.resolve(this.getContractsData().slice(0, 10));
  }

  getContractMedium() {
    return Promise.resolve(this.getContractsData().slice(0, 50));
  }

  getContractLarge() {
    return Promise.resolve(this.getContractsData().slice(0, 200));
  }

  getContractXLarge() {
    return Promise.resolve(this.getContractsData());
  }
   
}