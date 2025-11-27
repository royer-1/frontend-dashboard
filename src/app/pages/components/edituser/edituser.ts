import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edituser',
  imports: [CommonModule, FormsModule, InputTextModule, InputNumberModule, InputIconModule, ButtonModule, SelectModule ],
  templateUrl: './edituser.html',
  styleUrl: './edituser.scss'
})
export class Edituser {

  @Input() user: any;

  roles: { label: string, value: string }[] = [
    { label: 'Administrador', value: 'Administrador' },
    { label: 'Empleado', value: 'Empleado' },
    { label: 'Cliente', value: 'Cliente' }
  ];

  @Output() close = new EventEmitter<void>();

  constructor(
    private messageService: MessageService
  ) {}

  cancel() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Cancelado',
      detail: 'La edición fue cancelada'
    });
    this.close.emit();
  }

}
