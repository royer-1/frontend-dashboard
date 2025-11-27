import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { Managed } from '@/pages/service/managed.service';

@Component({
  selector: 'app-editmanageds',
  imports: [CommonModule, SelectModule, InputTextModule, FormsModule, ButtonModule, MessageModule],
  templateUrl: './editmanageds.html',
  styleUrl: './editmanageds.scss'
})
export class Editmanageds {

   @Input() managed!: Managed;

   @Output() managedUpdated = new EventEmitter<any>(); 

   @Output() close = new EventEmitter<void>();

   constructor(
    private messageService: MessageService
  ) {}

  editManaged() {
    if (!this.managed) return;
    
    this.managedUpdated.emit({ ...this.managed });
    this.close.emit();

    // this.messageService.add({
    //   severity: 'success',
    //   summary: 'Actualizado',
    //   detail: `El administrado ${this.managed.nombres} ${this.managed.apellido1} fue actualizado correctamente`,
    //   life: 3000
    // });
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
