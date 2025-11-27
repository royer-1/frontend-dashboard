  import { Component, Input, Output, EventEmitter  } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { DataViewModule } from 'primeng/dataview';
  import { TagModule } from 'primeng/tag';
  import { ButtonModule } from 'primeng/button';
  import { DialogModule } from 'primeng/dialog';
  import { ConfirmationService, MessageService } from 'primeng/api';

  import { Property } from '@/pages/models/Property';
  import { Editproperty } from '../editproperty/editproperty';

  @Component({
    selector: 'app-detailsproperty',
    imports: [CommonModule, DataViewModule, TagModule, ButtonModule, DialogModule, Editproperty],
    templateUrl: './detailsproperty.html',
    styleUrl: './detailsproperty.scss',
  })
  export class Detailsproperty {

    visibleEdit: boolean = false;
    selectedProperty: Property | null = null;

    @Input() property!: Property;
    @Output() onUpdated = new EventEmitter<Property>();

    constructor (
        private messageService: MessageService,
        private confirmationService: ConfirmationService
      ) {}

    editProperty(property: Property){
      this.selectedProperty = { ...property };
      this.visibleEdit = true;
    }

    propertyUpdated(updated: Property) {
      this.property = { ...updated }; // actualiza la vista de detalles sin refrescar todo
      this.selectedProperty = null;
      this.visibleEdit = false;
      this.onUpdated.emit({ ...updated });
      console.log('Recibido en details:', updated);
    }

    esAuditorio(): boolean {
      return this.property?.NombreTipo?.trim().toLowerCase() === 'Auditorios';
    }

    deleteProperty(property: Property) {
      // this.confirmationService.confirm({
      //   message: `¿Estás seguro de que deseas eliminar el inmueble ( ${property.nombre} )?`,
      //   header: 'Confirmación',
      //   icon: 'pi pi-exclamation-triangle',
      //   accept: () => {
      //     // le decimos al componenete padre para que lo borre de la lista
      //     this.onDelete.emit(property);

      //     this.messageService.add({
      //       severity: 'success',
      //       summary: 'Eliminado',
      //       detail: 'El inmueble fue eliminado correctamente',
      //       life: 3000
      //     })
      //   }
      // })
    }

  }
