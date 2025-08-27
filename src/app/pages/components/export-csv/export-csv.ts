import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-export-csv',
  imports: [ButtonModule],
  templateUrl: './export-csv.html',
  styleUrl: './export-csv.scss'
})
export class ExportCsv {

  @ViewChild('dt') dt!: Table;

  exportCSV() {
    this.dt.exportCSV();
  }

}
