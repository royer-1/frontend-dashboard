import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { Rental ,RentalService } from '../service/rentals.service';
import { TableSearchBarComponent } from '../components/table-search-bar-component/table-search-bar-component';
import { ExportXlsx } from '../components/export-xlsx/export-xlsx';
import { Addrentals } from '../components/addrentals/addrentals';

interface Column {
    field: string;
    header: string;
}
interface ExportColumn {
    title: string;
    dataKey: string;
}
@Component({
  selector: 'app-rentals',
  imports: [TableModule, ToolbarModule, ButtonModule, DialogModule, IconFieldModule, InputIconModule, InputTextModule, TableSearchBarComponent, Addrentals, ConfirmDialogModule, ExportXlsx, DatePipe, CurrencyPipe, ReactiveFormsModule],
  templateUrl: './rentals.html',
  styleUrl: './rentals.scss',
  providers: [RentalService, ConfirmationService]
})
export class Rentals implements OnInit {

  rental: Rental[] = [];

  selectedRentals: Rental[] = [];

  visibleAddRental: boolean = false;

  cols!: Column[];

  exportColumns!: ExportColumn[];
  
  @ViewChild('dt') dt!: Table;

  @ViewChild('filter') filter!: ElementRef;

  constructor (
    private rentalService: RentalService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.rentalService.getRentalLarge().then((rental) => {
      this.rental = rental
    })

    this.loadDemoData();

  }

  loadDemoData() {
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellidos', header: 'Apellidos' },
      { field: 'nombre_auditorio', header: 'Nombre Inmueble' },
      { field: 'fecha_inicio', header: 'Fecha Inicio' },
      { field: 'fecha_final', header: 'Fecha Final' },
      { field: 'importe_pago', header: 'Importe Pago' },
      { field: 'comprobante_pago', header: 'Comprobante Pago' },
      { field: 'fecha_comprobante', header: 'Fecha Comprobante' },
      { field: 'orden_pago', header: 'Orden Pago' },
      { field: 'fecha_orden', header: 'Fecha Orden' }
    ];

    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }

  addRentals(){
    this.visibleAddRental = true;
  }

  deleteRental(rental: Rental){
    this.confirmationService.confirm({
      message: `¿Estás seguro de que deseas eliminar el alquiler de ${rental.nombre} ${rental.apellidos}?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.rental = this.rental.filter((val) => val.IdRentals !== rental.IdRentals);

        this.messageService.add({
          severity: 'success',
          summary: 'Eliminado',
          detail: `El alquiler de ${rental.nombre} ${rental.apellidos} fue eliminado correctamente`,
          life: 3000
        });
      }
    });
  }

  deleteSelectedRentals(){
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas eliminar los alquileres seleccionados?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.rental = this.rental.filter((val) => !this.selectedRentals?.includes(val));
        this.selectedRentals = [];

        this.messageService.add({
          severity: 'success',
          summary: 'Eliminado',
          detail: 'Los alquileres seleccionados fueron eliminados',
          life: 3000
        });
      }
    });
  }

  rentalAdded(newRental: Rental) {
    this.rental.push(newRental);
    this.visibleAddRental = false;
    this.messageService.add({
      severity: 'success',
      summary: 'Nuevo Alquiler',
      detail: `Se registró el alquiler de ${newRental.nombre} ${newRental.apellidos}`,
      life: 3000
    });
  }


}
