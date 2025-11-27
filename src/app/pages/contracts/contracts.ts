import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Table, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Contract, ContractService } from '../service/contracts.service';
import { ExportXlsx } from '../components/export-xlsx/export-xlsx';
import { TableSearchBarComponent } from '../components/table-search-bar-component/table-search-bar-component';
import { Addcontracts } from '../components/addcontracts/addcontracts';
import { Detailsschedule } from '../components/detailsschedule/detailsschedule';

interface Column {
    field: string;
    header: string;
}
interface ExportColumn {
    title: string;
    dataKey: string;
}
@Component({
  selector: 'app-contracts',
  imports: [TableModule, ButtonModule, ToolbarModule, DialogModule, IconFieldModule, InputIconModule, FormsModule, ButtonModule, InputTextModule, TableSearchBarComponent, Addcontracts, Detailsschedule, ExportXlsx, ConfirmDialogModule, DatePipe, CurrencyPipe],
  templateUrl: './contracts.html',
  styleUrl: './contracts.scss',
  providers: [ContractService, ConfirmationService]
})
export class Contracts {

  contract: Contract[] = [];

  selectedContracts: Contract[] =  [];

  visibleAddContract: boolean = false;

  visibleShedule: boolean = false;

  selectedContract: Contract | null = null ;

  cols!: Column[];

  exportColumns!: ExportColumn[];

  @ViewChild('dt') dt!: Table;
  
  @ViewChild('filter') filter!: ElementRef;

  constructor (
    private contractService: ContractService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.contractService.getContractLarge().then((contract) => {
      this.contract = contract
    })
  }

  loadDemoData() {
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellidos', header: 'Apellidos' },
      { field: 'nombre_inmueble', header: 'Nombre Inmueble' },
      { field: 'num_contrato', header: 'Numero de Contrato' },
      { field: 'fecha_inicio', header: 'Fecha Inicio' },
      { field: 'fecha_final', header: 'Fecha Final' },
      { field: 'monto_alquiler', header: 'Monto de Alquiler' },
      { field: 'monto_agua', header: 'Monto de Agua' },
      { field: 'monto_luz', header: 'Monto de Luz' },
      { field: 'estado', header: 'Estado' },
      { field: 'periodo_inicio', header: 'Periodo de Inicio' },
      { field: 'periodo_fin', header: 'Periodo Final' },
      { field: 'importe_alquiler', header: 'Importe de Alquiler' },
      { field: 'importe_agua', header: 'Importe de Agua' },
      { field: 'importe_luz', header: 'Importe de Luz' },
      { field: 'fecha_limite_pago', header: 'Fecha limite de Pago' },
      { field: 'comprobante_pago', header: 'Comprobante de Pago' },
      { field: 'fecha_comprobante', header: 'Fecha de Comprobante' },
      { field: 'orden_pago', header: 'Orden de Pago' },
      { field: 'fecha_orden', header: 'Fceha de Orden' }
    ];

    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

  }

  detailsschedule(contract:any) { 
    this.selectedContract = contract;
    this.visibleShedule = true;
  }

  addContracts(){
    this.visibleAddContract = true;
  }

  deleteContract(contract: Contract) {
    this.confirmationService.confirm({
      message: `¿Estás seguro de que deseas eliminar el alquiler de ${contract.nombre} ${contract.apellidos}?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.contract = this.contract.filter((val) => val.idContract !== contract.idContract);

        this.messageService.add({
          severity: 'success',
          summary: 'Eliminado',
          detail: `El contrato de ${contract.nombre} ${contract.apellidos} fue eliminado correctamente`,
          life: 3000
        });
      }
    })
  }

  deleteSelectedContracts(){
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas eliminar los contratos seleccionados?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.contract = this.contract.filter((val) => !this.selectedContracts?.includes(val));
        this.selectedContracts = [];

        this.messageService.add({
          severity: 'success',
          summary: 'Eliminado',
          detail: 'Los contratos seleccionados fueron eliminados',
          life: 3000
        });
      }
    });
  }

}
