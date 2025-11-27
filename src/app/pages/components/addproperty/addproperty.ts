import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { Router } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@Component({
  selector: 'app-addproperty',
  imports: [CommonModule, SelectModule, FormsModule, ButtonModule, InputTextModule, MessageModule, ToggleButtonModule, TextareaModule, FileUploadModule, ConfirmDialogModule],
  templateUrl: './addproperty.html',
  styleUrl: './addproperty.scss',
})


export class Addproperty {

  //  property: Property = {
  //   IdPredio: 0,
  //   Tipo: '',
  //   nombre: '',
  //   imagen: '',
  //   descripcion: '',
  //   area: null,
  //   capacidad: null,
  //   direccion: '',
  //   registro_agua: false,
  //   registro_luz: false,
  //   ubigeo: null,
  //   latitud: null,
  //   longitud: null
  // };

  valueWater: boolean = false;
  
  valueLight: boolean = false;

  uploadedFiles: any[] = [];

  chooseDisabled: boolean = false;

  // SelectedPropertyType: string | null = null;

  typeProperty: { label: string, value: string }[] = [
    { label: 'Auditorio', value: 'Auditorio' },
    { label: 'SS.HH', value: 'SS.HH' },
    { label: 'Almacen', value: 'Almacen' },
    { label: 'Quiosco', value: 'Quiosco' }
  ];

  @Output() onCancel = new EventEmitter<void>();

  @Output() onSaved = new EventEmitter<void>();


  constructor(
    private messageService: MessageService,
    private router: Router
  ) {}

  onUpload(event: any) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'Éxito',
      detail: 'Imagen subida correctamente'
    });
  }

  addProperty() {

    // console.log('Propiedad guardada:', this.property);

    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'La propiedad se registró correctamente'
    });

    setTimeout(() => {
      this.onSaved.emit(); 
      this.router.navigate(['/propertys']);
    }, 600);

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
      this.router.navigate(['/propertys']);
    }, 100);
  }

}
