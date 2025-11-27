import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Table } from 'primeng/table';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-export-xlsx',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './export-xlsx.html',
  styleUrl: './export-xlsx.scss'
})
export class ExportXlsx {

  @Input() table!: Table;

  exportExcel() {
    if (!this.table || !this.table.value) {
      console.error('No hay datos en la tabla para exportar.');
      return;
    }

    // Obtener columnas de la tabla (headers)
    const columns = this.table.columns?.map((col: any) => col.header) || [];

    // Convertimos datos dinámicamente según las columnas
    const data = this.table.value.map((row: any) => {
      const obj: any = {};
      this.table.columns?.forEach((col: any) => {
        obj[col.header] = row[col.field]; // usa header como título y field como clave
      });
      return obj;
    });

    // Creamos hoja de Excel
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Ajustar anchos automáticamente
    worksheet['!cols'] = columns.map((col: string) => ({ wch: col.length + 15 }));

    // Crear libro y exportar
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
    XLSX.writeFile(workbook, 'Export.xlsx');
  }

}
