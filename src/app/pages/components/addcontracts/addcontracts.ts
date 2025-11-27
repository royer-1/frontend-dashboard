import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { DatePicker } from 'primeng/datepicker';
import { Router } from '@angular/router';

import { Managed, ManagedService } from '@/pages/service/managed.service';
import { PropertyService } from '@/pages/service/property.service';
import { Contract } from '@/pages/service/contracts.service';

@Component({
  selector: 'app-addcontracts',
  imports: [SelectModule, InputTextModule, FormsModule, ButtonModule, MessageModule, DatePicker],
  templateUrl: './addcontracts.html',
  styleUrl: './addcontracts.scss'
})
export class Addcontracts {
  
  selectedDoc: string = '';

  numeroDoc: string = '';
  
  nombreAdministrado: string = '';
  
  contract: Contract = {
    idContract: 0,
    nombre: '',
    apellidos: '',
    nombre_inmueble: '',
    num_contrato: null,
    fecha_inicio: null,
    fecha_final: null,
    monto_alquiler: null,
    monto_agua: null,
    monto_luz: null,
    estado: '',
    periodo_inicio: null,
    periodo_fin: null,
    importe_alquiler:  null,
    importe_agua: null,
    importe_luz: null,
    fecha_limite_pago: null,
    comprobante_pago: '',
    fecha_comprobante: null,
    orden_pago: '',
    fecha_orden: null
  }

  @Output() onCancel = new EventEmitter<void>();
  
  loading = [false];
  
  date: Date[] | undefined;

  inmuebles: { label: string, value: string }[] = [];

  tipo_doc: { label: string, value: string }[] = [
    { label: 'DNI', value: 'DNI' },
    { label: 'Carnet de extranjeria', value: 'Carnet de extranjeria' },
    { label: 'Pasaporte', value: 'Pasaporte' },
    { label: 'RUC', value: 'RUC' }
  ];
  
  constructor(
    private messageService: MessageService,
    private managedService: ManagedService,
    private propertyService: PropertyService,
    private router: Router
    
  ) {}

  ngOnInit() {
          // const properties = this.propertyService.getPropertyData();
          // this.inmuebles = properties
          //     .filter(p => p.tipoInmueble !== 'Auditorio')
          //     .map(p => ({
          //     label: `${p.nombre} - ${p.tipoInmueble}`, 
          //     value: p.nombre 
          //     }));
  }
  
    load(index: number) {
    this.loading[index] = true;

    // Simula tiempo de carga
        setTimeout(() => {
        this.loading[index] = false;

        const manageds = this.managedService.getManagedsData();
        const found: Managed | undefined = manageds.find(m =>
            m.tipo_doc === this.selectedDoc && m.numero_doc === this.numeroDoc
        );

        if (found) {
            this.nombreAdministrado = `${found.nombres} ${found.apellido1} ${found.apellido2}`;
            this.messageService.add({ severity: 'success', summary: 'Encontrado', detail: `Administrado: ${this.nombreAdministrado}` });
        } else {
            this.nombreAdministrado = '';
            this.messageService.add({ severity: 'warn', summary: 'No encontrado', detail: 'No existe un administrado con esos datos' });
        }
        }, 1000);
    }

  addContract(form: NgForm) {
    if (form.invalid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Datos incompletos',
        detail: 'Debe completar todos los campos obligatorios' 
      });
      return;
    }

    // const [nombre, apellido1, apellido2] = this.nombreAdministrado.split(" ");

  }

  cancelContract(form: NgForm) {
    form.resetForm();

    this.messageService.add({
      severity: 'warn',
      summary: 'Cancelado',
      detail: 'El registro fue cancelado'
    });

    setTimeout(() => {
      this.onCancel.emit();
      this.router.navigate(['/contracts']);
    }, 100);
  }

}
