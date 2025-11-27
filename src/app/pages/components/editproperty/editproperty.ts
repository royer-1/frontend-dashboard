import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';

import { Property } from '@/pages/models/Property';
import { PropertyService } from '@/pages/service/property.service';

@Component({
  selector: 'app-editproperty',
  imports: [FormsModule, CommonModule, ButtonModule, InputTextModule, InputNumberModule, InputIconModule, SelectModule, TextareaModule, SelectButtonModule, ToggleButtonModule, FileUploadModule],
  templateUrl: './editproperty.html',
  styleUrl: './editproperty.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Editproperty implements OnInit{

  @Input() property!: Property;
  @Output() close = new EventEmitter<void>();
  @Output() onSaved = new EventEmitter<Property>(); 

  constructor(
    private messageService: MessageService,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {}

  saveproperty() {
    this.propertyService.update(this.property).subscribe({
      next: (updated) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'La propiedad se actualizó correctamente'
        });
        // emitimos el objeto actualizado al padre
        const result = updated ?? this.property; // usa el devuelto o el editado
        this.onSaved.emit({ ...result });        // siempre emite nueva referencia
        // this.onSaved.emit(updated);
        this.close.emit();
        console.log('Emitido desde edit:', result);
        console.log('Objeto transformado:', updated);
      },
      error: (err) => {
        console.error('Error al actualizar propiedad', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo actualizar la propiedad'
        });
      }
    });
  }

  onImageSelected(event: any) {
    const file: File = event.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.property.Imagen = e.target.result; // Se actualiza la preview de la imagen
      };
      reader.readAsDataURL(file);
    }
  }

  // (Opcional) si quisieras manejar subida a un backend
  onImageUpload(event: any) {
    // Aquí iría tu lógica para enviar la imagen al servidor
    console.log("Imagen lista para enviar:", event.files[0]);
  }

  esAuditorio(): boolean {
    return this.property?.NombreTipo?.trim().toLowerCase() === 'auditorios';
  }

  cancel() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Cancelado',
      detail: 'La edición fue cancelada'
    });
    this.close.emit(); // avisa al padre que debe cerrar el dialog
  }

}
