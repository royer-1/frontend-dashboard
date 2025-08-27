import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Contract {
   idContract: string;
   nombre: string;
   apellidos: string;
   nombre_inmueble: string;
   num_contrato: string;
   fecha_inicio: string;
   fecha_final: string;
   monto_alquiler: string;
   monto_agua: string;
   monto_luz: string;
   estado: string;

  //  idConograma: string;
  //  periodo_inicio: string;
  //  periodo_fin: string;
  //  importe_alquiler: string;
  //  importe_agua: string;
  //  importe_luz: string;
  //  fecha_limite_pago: string;
  //  comprobante_pago: string;
  //  fecha_comprobante: string;
  //  orden_pago: string;
  //  fecha_orden: string;
}

@Injectable({
   providedIn: 'root'
})

export class ContractService {
  getContractsData(){
    return [
      {
        idContract: "CT001",
        nombre: "Carlos",
        apellidos: "Ramírez Torres",
        nombre_inmueble: "Quiosco Central",
        num_contrato: "CN-2025-001",
        fecha_inicio: "2025-01-10",
        fecha_final: "2025-06-10",
        monto_alquiler: "800.00",
        monto_agua: "50.00",
        monto_luz: "120.00",
        estado: "Vigente",
        cronograma_pagos: [
          {
            idConograma: "CRG001",
            periodo_inicio: "2025-01-01",
            periodo_fin: "2025-01-31",
            importe_alquiler: "800.00",
            importe_agua: "50.00",
            importe_luz: "120.00",
            fecha_limite_pago: "2025-01-31",
            comprobante_pago: "CP-0001",
            fecha_comprobante: "2025-01-28",
            orden_pago: "OP-0001",
            fecha_orden: "2025-01-29"
          }
        ]
      },
      {
        idContract: "CT002",
        nombre: "María",
        apellidos: "Gómez Salazar",
        nombre_inmueble: "Auditorio Principal",
        num_contrato: "CN-2025-002",
        fecha_inicio: "2025-02-01",
        fecha_final: "2025-07-01",
        monto_alquiler: "2500.00",
        monto_agua: "150.00",
        monto_luz: "300.00",
        estado: "Vigente",
        cronograma_pagos: [
          {
            idConograma: "CRG002",
            periodo_inicio: "2025-02-01",
            periodo_fin: "2025-02-28",
            importe_alquiler: "800.00",
            importe_agua: "45.00",
            importe_luz: "115.00",
            fecha_limite_pago: "2025-02-28",
            comprobante_pago: "CP-0002",
            fecha_comprobante: "2025-02-25",
            orden_pago: "OP-0002",
            fecha_orden: "2025-02-26"
          }
        ]
      },
      {
        idContract: "CT003",
        nombre: "Luis",
        apellidos: "Fernández Díaz",
        nombre_inmueble: "Almacén Pequeño A",
        num_contrato: "CN-2025-003",
        fecha_inicio: "2025-03-05",
        fecha_final: "2025-08-05",
        monto_alquiler: "600.00",
        monto_agua: "30.00",
        monto_luz: "80.00",
        estado: "Vigente",
        cronograma_pagos: [
          {
            idConograma: "CRG003",
            periodo_inicio: "2025-03-01",
            periodo_fin: "2025-03-31",
            importe_alquiler: "800.00",
            importe_agua: "60.00",
            importe_luz: "130.00",
            fecha_limite_pago: "2025-03-31",
            comprobante_pago: "CP-0003",
            fecha_comprobante: "2025-03-29",
            orden_pago: "OP-0003",
            fecha_orden: "2025-03-30"
          }
        ]
      },
      {
        idContract: "CT004",
        nombre: "Ana",
        apellidos: "Lopez Rivera",
        nombre_inmueble: "Servicios Higiénicos Norte",
        num_contrato: "CN-2025-004",
        fecha_inicio: "2025-04-10",
        fecha_final: "2025-09-10",
        monto_alquiler: "700.00",
        monto_agua: "100.00",
        monto_luz: "90.00",
        estado: "Pendiente",
        cronograma_pagos: [
          {
            idConograma: "CRG004",
            periodo_inicio: "2025-04-01",
            periodo_fin: "2025-04-30",
            importe_alquiler: "800.00",
            importe_agua: "55.00",
            importe_luz: "125.00",
            fecha_limite_pago: "2025-04-30",
            comprobante_pago: "CP-0004",
            fecha_comprobante: "2025-04-27",
            orden_pago: "OP-0004",
            fecha_orden: "2025-04-28"
          }
        ]
      },
      {
        idContract: "CT005",
        nombre: "Jorge",
        apellidos: "Castillo Vargas",
        nombre_inmueble: "Auditorio Universitario",
        num_contrato: "CN-2025-005",
        fecha_inicio: "2025-05-15",
        fecha_final: "2025-11-15",
        monto_alquiler: "3000.00",
        monto_agua: "200.00",
        monto_luz: "400.00",
        estado: "Vigente",
        cronograma_pagos: [
          {
            idConograma: "CRG005",
            periodo_inicio: "2025-05-01",
            periodo_fin: "2025-05-31",
            importe_alquiler: "800.00",
            importe_agua: "50.00",
            importe_luz: "120.00",
            fecha_limite_pago: "2025-05-31",
            comprobante_pago: "CP-0005",
            fecha_comprobante: "2025-05-28",
            orden_pago: "OP-0005",
            fecha_orden: "2025-05-29"
          }
        ]
      },
      {
        idContract: "CT006",
        nombre: "Lucía",
        apellidos: "Paredes Huamán",
        nombre_inmueble: "Quiosco de Libros",
        num_contrato: "CN-2025-006",
        fecha_inicio: "2025-06-01",
        fecha_final: "2025-12-01",
        monto_alquiler: "500.00",
        monto_agua: "25.00",
        monto_luz: "60.00",
        estado: "Finalizado",
        cronograma_pagos: [
          {
            idConograma: "CRG006",
            periodo_inicio: "2025-06-01",
            periodo_fin: "2025-06-30",
            importe_alquiler: "800.00",
            importe_agua: "48.00",
            importe_luz: "118.00",
            fecha_limite_pago: "2025-06-30",
            comprobante_pago: "CP-0006",
            fecha_comprobante: "2025-06-27",
            orden_pago: "OP-0006",
            fecha_orden: "2025-06-28"
          }
        ]
      },
      {
        idContract: "CT007",
        nombre: "Pedro",
        apellidos: "Alarcón Mejía",
        nombre_inmueble: "Auditorio Ejecutivo",
        num_contrato: "CN-2025-007",
        fecha_inicio: "2025-07-10",
        fecha_final: "2026-01-10",
        monto_alquiler: "1800.00",
        monto_agua: "120.00",
        monto_luz: "250.00",
        estado: "Vigente",
        cronograma_pagos: [
          {
            idConograma: "CRG007",
            periodo_inicio: "2025-07-01",
            periodo_fin: "2025-07-31",
            importe_alquiler: "800.00",
            importe_agua: "52.00",
            importe_luz: "122.00",
            fecha_limite_pago: "2025-07-31",
            comprobante_pago: "CP-0007",
            fecha_comprobante: "2025-07-29",
            orden_pago: "OP-0007",
            fecha_orden: "2025-07-30"
          }
        ]
      },
      {
        idContract: "CT008",
        nombre: "Sofía",
        apellidos: "Mendoza Rojas",
        nombre_inmueble: "Servicios Higiénicos Sur",
        num_contrato: "CN-2025-008",
        fecha_inicio: "2025-08-20",
        fecha_final: "2026-02-20",
        monto_alquiler: "750.00",
        monto_agua: "90.00",
        monto_luz: "100.00",
        estado: "Pendiente",
        cronograma_pagos: [
          {
            idConograma: "CRG008",
            periodo_inicio: "2025-08-01",
            periodo_fin: "2025-08-31",
            importe_alquiler: "800.00",
            importe_agua: "49.00",
            importe_luz: "119.00",
            fecha_limite_pago: "2025-08-31",
            comprobante_pago: "CP-0008",
            fecha_comprobante: "2025-08-28",
            orden_pago: "OP-0008",
            fecha_orden: "2025-08-29"
          }
        ]
      },
      {
        idContract: "CT009",
        nombre: "Ricardo",
        apellidos: "Chávez León",
        nombre_inmueble: "Auditorio Cultural",
        num_contrato: "CN-2025-009",
        fecha_inicio: "2025-09-05",
        fecha_final: "2026-03-05",
        monto_alquiler: "2200.00",
        monto_agua: "170.00",
        monto_luz: "310.00",
        estado: "Vigente",
        cronograma_pagos: [
          {
            idConograma: "CRG009",
            periodo_inicio: "2025-09-01",
            periodo_fin: "2025-09-30",
            importe_alquiler: "800.00",
            importe_agua: "51.00",
            importe_luz: "121.00",
            fecha_limite_pago: "2025-09-30",
            comprobante_pago: "CP-0009",
            fecha_comprobante: "2025-09-27",
            orden_pago: "OP-0009",
            fecha_orden: "2025-09-28"
          }
        ]
      },
      {
        idContract: "CT010",
        nombre: "Gabriela",
        apellidos: "Silva Campos",
        nombre_inmueble: "Almacén de Herramientas",
        num_contrato: "CN-2025-010",
        fecha_inicio: "2025-10-01",
        fecha_final: "2026-04-01",
        monto_alquiler: "650.00",
        monto_agua: "40.00",
        monto_luz: "95.00",
        estado: "Vigente",
        cronograma_pagos: [
          {
            idConograma: "CRG010",
            periodo_inicio: "2025-10-01",
            periodo_fin: "2025-10-31",
            importe_alquiler: "800.00",
            importe_agua: "53.00",
            importe_luz: "123.00",
            fecha_limite_pago: "2025-10-31",
            comprobante_pago: "CP-0010",
            fecha_comprobante: "2025-10-29",
            orden_pago: "OP-0010",
            fecha_orden: "2025-10-30"
          }
        ]
      },
      {
        idContract: "CT011",
        nombre: "Andrés",
        apellidos: "Pérez Gutiérrez",
        nombre_inmueble: "Auditorio Norte",
        num_contrato: "CN-2025-011",
        fecha_inicio: "2025-11-12",
        fecha_final: "2026-05-12",
        monto_alquiler: "1600.00",
        monto_agua: "130.00",
        monto_luz: "210.00",
        estado: "Vigente",
        cronograma_pagos: [
          {
            idConograma: "CRG011",
            periodo_inicio: "2025-11-01",
            periodo_fin: "2025-11-30",
            importe_alquiler: "800.00",
            importe_agua: "54.00",
            importe_luz: "124.00",
            fecha_limite_pago: "2025-11-30",
            comprobante_pago: "CP-0011",
            fecha_comprobante: "2025-11-28",
            orden_pago: "OP-0011",
            fecha_orden: "2025-11-29"
          }
        ]
      },
      {
        idContract: "CT012",
        nombre: "Valeria",
        apellidos: "Morales Suárez",
        nombre_inmueble: "Auditorio Sur",
        num_contrato: "CN-2025-012",
        fecha_inicio: "2025-12-01",
        fecha_final: "2026-06-01",
        monto_alquiler: "1400.00",
        monto_agua: "110.00",
        monto_luz: "180.00",
        estado: "Pendiente",
        cronograma_pagos: [
          {
            idConograma: "CRG012",
            periodo_inicio: "2025-12-01",
            periodo_fin: "2025-12-31",
            importe_alquiler: "800.00",
            importe_agua: "56.00",
            importe_luz: "126.00",
            fecha_limite_pago: "2025-12-31",
            comprobante_pago: "CP-0012",
            fecha_comprobante: "2025-12-29",
            orden_pago: "OP-0012",
            fecha_orden: "2025-12-30"
          }
        ]
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