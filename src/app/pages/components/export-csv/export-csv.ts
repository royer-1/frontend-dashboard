import { Component, Input, AfterViewInit  } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-export-csv',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './export-csv.html',
  styleUrl: './export-csv.scss'
})
export class ExportCsv implements AfterViewInit{

  @Input() table!: Table;

  ngAfterViewInit() {
    // debug para confirmar que sí recibimos la tabla
    console.log('📦 Tabla recibida en export-csv:', this.table);
  }

  exportCSV() {
    if (this.table) {
      console.log("Exportando CSV...");
      this.table.exportCSV();
    } else {
      console.error("No se pasó la tabla al componente ExportCsv");
    }
  }
}
