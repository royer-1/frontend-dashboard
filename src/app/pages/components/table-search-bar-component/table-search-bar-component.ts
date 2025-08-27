import { Component, ViewChild, ElementRef } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-table-search-bar-component',
  imports: [IconFieldModule, InputIconModule, InputTextModule, ButtonModule],
  templateUrl: './table-search-bar-component.html',
  styleUrl: './table-search-bar-component.scss'
})
export class TableSearchBarComponent {

  @ViewChild('dt') dt!: Table;
  @ViewChild('filter') filter!: ElementRef;

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

}
