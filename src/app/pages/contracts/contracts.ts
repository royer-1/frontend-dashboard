import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Table, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';

import { Contract, ContractService } from '../service/contracts.service';
import { ExportCsv } from '../components/export-csv/export-csv';
import { TableSearchBarComponent } from '../components/table-search-bar-component/table-search-bar-component';

@Component({
  selector: 'app-contracts',
  imports: [TableModule, ButtonModule, ToolbarModule, DialogModule, IconFieldModule, InputIconModule, FormsModule, ButtonModule, InputTextModule, ExportCsv, TableSearchBarComponent],
  templateUrl: './contracts.html',
  styleUrl: './contracts.scss',
  providers: [ContractService]
})
export class Contracts {

  contract!: Contract[];

  selectedContracts!: Contract[] | null;

  visible: boolean = false;

  @ViewChild('dt') dt!: Table;
  @ViewChild('filter') filter!: ElementRef;

  constructor (
    private contractService: ContractService
  ) {}

  ngOnInit(): void {
    this.contractService.getContractLarge().then((contract) => {
      this.contract = contract
    })
  }

  addContracts(){
    this.visible = true;
  }

  deleteContract() {

  }

  deleteSelectedContracts(){

  }

}
