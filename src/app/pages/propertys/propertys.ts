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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';

import { Detailsproperty } from '../components/detailsproperty/detailsproperty';
import { PropertyService } from '../service/property.service';
import { Addproperty } from '../components/addproperty/addproperty';

import { Property } from '../models/Property';
import { TypePropertyService } from '../service/typeproperty.service';
import { TypeProperty } from '../models/TypeProperty';

@Component({
  selector: 'app-propertys',
  imports: [CommonModule, DataViewModule, FormsModule, SelectButtonModule, TagModule, ButtonModule, PickListModule, OrderListModule, DialogModule, Detailsproperty, Addproperty, Select, ConfirmDialogModule],
  templateUrl: './propertys.html',
  styleUrl: './propertys.scss',
  providers: [PropertyService, ConfirmationService, TypePropertyService, MessageService]
})
export class Propertys {

    layout: 'grid' | 'list' = 'grid';
    options = ['grid', 'list'];

    visibleDetails: boolean = false;
    visibleAdd: boolean = false;

    properties: Property[] = [];
    allProperties: Property[] = [];
    selectedProperty: Property | null = null;

    // property!: Property[];
    // allProperties: Property[] = [];
    // selectedItem: any = null;

    typeProperty: { label: string; value: string | 'Todos' }[] = [];
    selectedTypeProperty: string | 'Todos' | undefined;

    constructor(
        private propertyService: PropertyService,
        private typePropertyService: TypePropertyService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.loadProperties();
        this.loadTypes();
    }

    loadProperties() {
        this.propertyService.getAll().subscribe({
        next: (data) => {
            console.log('Predios cargados:', data);
            this.allProperties = data;
            this.properties  = [...this.allProperties];
        },
        error: (err) => console.error('Error cargando predios', err)
        });
    }
    

    loadTypes() {
        this.typePropertyService.getAll().subscribe({
        next: (types) => {
            console.log('Tipos cargados:', types);
            this.typeProperty = [
            { label: 'Todos', value: 'Todos' },
            ...types.map(t => ({ label: t.NombreTipo, value: String(t.IdPredioTipo) }))
            ];
        },
        error: (err) => console.error('Error cargando tipos de predio', err)
        });
    }

    filterProperties() {
        console.log('Filtro activo:', this.selectedTypeProperty);
        if (!this.selectedTypeProperty || this.selectedTypeProperty === 'Todos') {
    this.properties = [...this.allProperties];
  } else {
    this.properties = this.allProperties.filter(p => {
      // 👇 Aquí agregas el log
      console.log('Comparando:', p.IdPredioTipo, this.selectedTypeProperty);
      return p.IdPredioTipo === this.selectedTypeProperty;
    });
  }
    }

    updateList(updated: Property) {
        const filtroActivo = this.selectedTypeProperty;
       this.allProperties = this.allProperties.map(p =>
            p.IdPredio === updated.IdPredio ? updated : p
        );

        this.selectedTypeProperty = filtroActivo; 
        this.filterProperties();

        this.selectedProperty = updated;
         const sigueVisible = this.properties.some(p => p.IdPredio === updated.IdPredio);
    if (!sigueVisible) {
        this.visibleDetails = true; // fuerza mostrar detalles
        this.messageService.add({
        severity: 'info',
        summary: 'Tipo cambiado',
        detail: 'El predio fue editado y movido a otra categoría. Se mantiene visible en detalles.'
        });
    }
    console.log('Recibido en padre:', updated);
    }

    addProperty () {
        this.visibleAdd = true;
    }

     deleteFromList(property: Property) {
        this.allProperties = this.allProperties.filter(p => p.IdPredio !== property.IdPredio);
        this.properties = this.properties.filter(p => p.IdPredio !== property.IdPredio);
        this.visibleDetails = false;
    }

    detailsProperty (property: Property) {
        this.selectedProperty = { ...property };
        this.visibleDetails = true;
        console.log('Detalle seleccionado:', this.selectedProperty);
    }

    rentalsProperty () {
        console.log('Alquilar predio');
    }


}
