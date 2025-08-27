import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { Rental ,RentalService } from '../service/rentals.service';
import { TableSearchBarComponent } from '../components/table-search-bar-component/table-search-bar-component';
import { ExportCsv } from '../components/export-csv/export-csv';
import { Addrentals } from '../components/addrentals/addrentals';


@Component({
  selector: 'app-rentals',
  imports: [TableModule, ToolbarModule, ButtonModule, DialogModule, IconFieldModule, InputIconModule, InputTextModule, TableSearchBarComponent, ExportCsv, Addrentals],
  templateUrl: './rentals.html',
  styleUrl: './rentals.scss',
  providers: [RentalService]
})
export class Rentals implements OnInit {

  rental!: Rental[];

  selectedRentals!: Rental[] | null;

  visible: boolean = false;
  
  @ViewChild('dt') dt!: Table;
  @ViewChild('filter') filter!: ElementRef;

  constructor (
    private rentalService: RentalService
  ) {}

  ngOnInit(): void {
    this.rentalService.getRentalLarge().then((rental) => {
      this.rental = rental
    })
  }

  addRentals(){
    this.visible = true;
  }

  deleteRental(rental: any){ //esto lo puse asi para que no de errores, ver y corregir, la parte del any

  }

  deleteSelectedRentals(){

  }


}
