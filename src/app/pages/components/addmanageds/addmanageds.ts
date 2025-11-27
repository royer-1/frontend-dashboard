import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { Select, SelectModule } from 'primeng/select';

import { Managed } from '@/pages/service/managed.service';

@Component({
  selector: 'app-addmanageds',
  imports: [Select, SelectModule, InputTextModule, FormsModule, ButtonModule, MessageModule],
  templateUrl: './addmanageds.html',
  styleUrl: './addmanageds.scss',
})
export class Addmanageds {

  managed: Managed = {
    idManaged: 0,
    nombres: '',
    apellido1: '',
    apellido2: '',
    tipo_doc: '',
    numero_doc: '',
    razon_social: '',
    telefono: null,
    correo: '',
    direccion: '',
    ubigeo: ''
  }

  tipo_docs: { label: string, value: string }[] = [
    { label: 'DNI', value: 'DNI' },
    { label: 'Carnet de extranjeria', value: 'CE' },
    { label: 'Pasaporte', value: 'PAS' },
    { label: 'RUC', value: 'RUC' }
  ];

  @Output() onCancel = new EventEmitter<void>();

  @Output() managedAdded = new EventEmitter<Managed>();

  constructor(
    private messageService: MessageService,
    private router: Router
    
  ) {}
  
  
  // onSubmit(form: any) {
  //   if (form.valid) {
  //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
  //     form.resetForm();
  //   }
  // }
  
  addManaged(form: NgForm){

    if (form.invalid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Datos incompletos',
        detail: 'Debe completar todos los campos obligatorios'
      });
      return;
    }

    // console.log('Administrado guardado:', this.managed);

    // this.managedAdded.emit(this.managed);

    // this.messageService.add({
    //   severity: 'success',
    //   summary: 'Éxito',
    //   detail: 'El administrado se registró correctamente'
    // });

    // setTimeout(() => {
    //   this.managedAdded.emit(); 
    //   this.router.navigate(['/manageds']);
    // }, 600);

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
      this.router.navigate(['/manageds']);
    }, 100);
  }

}
