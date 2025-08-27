import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Table, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';

import { Managed, ManagedService } from '../service/managed.service';
import { ExportCsv } from '../components/export-csv/export-csv';
import { TableSearchBarComponent } from '../components/table-search-bar-component/table-search-bar-component';
import { Addmanageds } from '../components/addmanageds/addmanageds';
import { Editmanageds } from '../components/editmanageds/editmanageds';

@Component({
  selector: 'app-managed',
  imports: [TableModule, ButtonModule, ToolbarModule, DialogModule, IconFieldModule, InputIconModule, FormsModule, ButtonModule, InputTextModule, ExportCsv, TableSearchBarComponent, Addmanageds, Editmanageds],
  templateUrl: './manageds.html',
  styleUrl: './manageds.scss',
  providers: [ManagedService]
})
export class Manageds {

  managed! : Managed[];

  selectedManageds!: Managed[] | null;

  visibleAdd: boolean = false;

  visibleEdit: boolean = false;

  selectedManaged: any = null;

  @ViewChild('dt') dt!: Table;
  @ViewChild('filter') filter!: ElementRef;

  // @Input() managed: any;

  constructor (
    private managedService: ManagedService
  ) {}

  ngOnInit(): void {
    this.managedService.getManagedLarge().then((managed) => {
      this.managed = managed
    })
  }

  editManaged(managed:any) {
    this.selectedManaged = managed;
    this.visibleEdit = true;
  }

  addManaged() {
    this.visibleAdd = true;
  }

  deleteManaged() {

  }

  deleteSelectedManaged() {

  }

  
}

