import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { OrderListModule } from 'primeng/orderlist';
import { PickListModule } from 'primeng/picklist';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { Select } from 'primeng/select';

import { Detailsproperty } from '../components/detailsproperty/detailsproperty';
import { Property, PropertyService } from '../service/property.service';

interface TypeProperty {
    name: string;
    code: string;
}

@Component({
  selector: 'app-propertys',
  imports: [CommonModule, DataViewModule, FormsModule, SelectButtonModule, TagModule, ButtonModule, PickListModule, OrderListModule, DialogModule, Detailsproperty, Select],
  templateUrl: './propertys.html',
  styleUrl: './propertys.scss',
  providers: [PropertyService]
})
export class Propertys {

    layout: 'grid' | 'list' = 'grid';

    options = ['grid', 'list'];

    visibleDetails: boolean = false;

    property!: Property[];

    selectedItem: any = null;

    constructor(
        private propertyService: PropertyService
    ) {}

    ngOnInit() {
        this.propertyService.getPropertySmall().then((data) => (this.property = data.slice(0, 10)));

        this.typeProperty = [
            { name: 'Auditorio', code: 'AUD' },
            { name: 'Quioscos', code: 'KI' },
            { name: 'SS.HH', code: 'SH' },
            { name: 'Todos', code: 'TDO' }
        ];
    }

    details(item:any) {
        this.selectedItem = item;
        this.visibleDetails = true;
    }

    typeProperty: TypeProperty[] | undefined;

    selectedTypeProperty: TypeProperty | undefined;


}
