import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Table, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Managed, ManagedService } from '../service/managed.service';
import { ExportXlsx } from '../components/export-xlsx/export-xlsx';
import { TableSearchBarComponent } from '../components/table-search-bar-component/table-search-bar-component';
import { Addmanageds } from '../components/addmanageds/addmanageds';
import { Editmanageds } from '../components/editmanageds/editmanageds';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


interface Column {
    field: string;
    header: string;
}
interface ExportColumn {
    title: string;
    dataKey: string;
}
@Component({
  selector: 'app-managed',
  imports: [TableModule, ButtonModule, ToolbarModule, DialogModule, IconFieldModule, InputIconModule, FormsModule, ButtonModule, InputTextModule,ConfirmDialogModule, TableSearchBarComponent, Addmanageds, Editmanageds, ExportXlsx],
  templateUrl: './manageds.html',
  styleUrl: './manageds.scss',
  providers: [ManagedService, ConfirmationService]
})
export class Manageds {

  managed: Managed[] =[];

  selectedManageds: Managed[] = [];

  cols!: Column[];

  exportColumns!: ExportColumn[];

  visibleAdd: boolean = false;

  visibleEdit: boolean = false;

  selectedManaged!: Managed;

  @ViewChild('dt') dt!: Table;

  @ViewChild('filter') filter!: ElementRef;

  constructor (
    private managedService: ManagedService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.managedService.getManagedLarge().then((managed) => {
      this.managed = managed
    })

    this.loadDemoData();

  }

  loadDemoData() {
    this.cols = [
      { field: 'nombres', header: 'Nombres' },
      { field: 'apellido1', header: 'Apellidos Paterno' },
      { field: 'apellido2', header: 'Nombre Materno' },
      { field: 'tipo_doc', header: 'Tipo de Documento' },
      { field: 'numero_doc', header: 'Numero de Documento' },
      { field: 'razon_social', header: 'Razon Social' },
      { field: 'telefono', header: 'Telefono' },
      { field: 'correo', header: 'Correo' },
      { field: 'direccion', header: 'Direccion' },
      { field: 'ubigeo', header: 'Ubigeo' }
    ];

    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }

  editManaged(managed: Managed) {
    this.selectedManaged = { ...managed };
    this.visibleEdit = true;
  }

  addManaged() {
    this.visibleAdd = true;
  }

  managedAdded(newManaged: Managed) {

    this.managed = [...this.managed, newManaged];

    this.visibleAdd = false;

    this.messageService.add({
      severity: 'success',
      summary: 'Nuevo Administrado',
      detail: `Se registró al administrado ${newManaged.nombres} ${newManaged.apellido1}`,
      life: 3000
    });

  }

  managedUpdated(updatedManaged: Managed){
    const index = this.managed.findIndex(m => m.idManaged === updatedManaged.idManaged);
    if (index !== -1) {
      this.managed[index] = { ...updatedManaged };
    }

    this.messageService.add({
      severity: 'info',
      summary: 'Actualizado',
      detail: `El administrado ${updatedManaged.nombres} ${updatedManaged.apellido1} fue actualizado`,
    });

    this.visibleEdit = false;

  }

  deleteManaged(managed: Managed) {
    this.confirmationService.confirm({
      message: `¿Estás seguro de que deseas eliminar al administrado ${managed.nombres} ${managed.apellido1} ${managed.apellido2}?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.managed = this.managed.filter((val) => val.idManaged !== managed.idManaged);

        this.messageService.add({
          severity: 'success',
          summary: 'Eliminado',
          detail: `Los datos del administrado ${managed.nombres} ${managed.apellido1} fueron eliminado correctamente`,
          life: 3000
        })
      }
    });
  }

  deleteSelectedManageds() {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas eliminar los administrados seleccionados?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.managed = this.managed.filter((val) => !this.selectedManageds?.includes(val));
        this.selectedManageds = [];

        this.messageService.add({
          severity: 'success',
          summary: 'Eliminado',
          detail: 'Los administrados seleccionados fueron eliminados',
          life: 3000
        })
      }
    });
  }

  
}

