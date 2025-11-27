import { Component, Output, EventEmitter, OnInit  } from '@angular/core';
import { FormsModule, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { Select, SelectModule } from 'primeng/select';

import { ManagedService, Managed } from '@/pages/service/managed.service';
import { Rental } from '@/pages/service/rentals.service';
import { PropertyService } from '@/pages/service/property.service'; 

@Component({
  selector: 'app-addrentals',
  imports: [Select, SelectModule, InputTextModule, FormsModule, ButtonModule, MessageModule, DatePicker],
  templateUrl: './addrentals.html',
  styleUrl: './addrentals.scss'
})
export class Addrentals {

    selectedDoc: string = '';

    numeroDoc: string = '';

    nombreAdministrado: string = '';

    rental: Rental = {
        IdRentals: 0,
        nombre: '',
        apellidos: '',
        nombre_auditorio: '',
        fecha_inicio: null,
        fecha_final: null,
        importe_pago: null,
        comprobante_pago: '',
        fecha_comprobante: null,
        orden_pago: '',
        fecha_orden: null,
    }

    @Output() rentalAdded = new EventEmitter<Rental>();
    
    @Output() onCancel = new EventEmitter<void>();

    loading = [false];

    date: Date[] | undefined;

    auditorios: { label: string, value: string }[] = [];

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
        // Filtrar solo auditorios
        // const properties = this.propertyService.getPropertyData();
        // this.auditorios = properties
        //     .filter(p => p.tipoInmueble === 'Auditorio')
        //     .map(p => ({
        //     label: `${p.nombre} - Capacidad: ${p.capacidad}`, //  nombre + capacidad
        //     value: p.nombre  // si quieres, aquí también podrías guardar un objeto completo
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


    addRent(form: NgForm) {
        if (form.invalid) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Datos incompletos',
                detail: 'Debe completar todos los campos obligatorios'
            });
            return;
        }

        const [nombre, apellido1, apellido2] = this.nombreAdministrado.split(" ");

        // const newRental: Rental = {
        //     IdRentals: Date.now(),
        //     nombre: nombre,
        //     apellidos: `${apellido1 ?? ''} ${apellido2 ?? ''}`.trim(),
        //     nombre_auditorio: this.rental.nombre_auditorio,
        //     fecha_inicio: this.rental.fecha_inicio,
        //     fecha_final: this.rental.fecha_final,
        //     importe_pago: this.rental.importe_pago,
        //     comprobante_pago: this.rental.comprobante_pago,
        //     fecha_comprobante: this.rental.fecha_comprobante,
        //     orden_pago: this.rental.orden_pago,
        //     fecha_orden: this.rental.fecha_orden
        // };

        // this.rentalAdded.emit(newRental);

        // this.messageService.add({ 
        //     severity: 'success', 
        //     summary: 'Alquiler agregado', 
        //     detail: `Se registró el alquiler de ${newRental.nombre} ${newRental.apellidos}` 
        // });

        form.resetForm();
    }

    cancel(form: NgForm) {
        form.resetForm();

        this.messageService.add({
        severity: 'warn',
        summary: 'Cancelado',
        detail: 'El registro fue cancelado'
        });

        setTimeout(() => {
        this.onCancel.emit();
        this.router.navigate(['/rentals']);
        }, 100);
    }

}
