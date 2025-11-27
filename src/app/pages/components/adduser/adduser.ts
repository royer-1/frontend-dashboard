import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { User, UserService } from '@/pages/service/users.service';

@Component({
  selector: 'app-adduser',
  imports: [CommonModule, SelectModule, FormsModule, ButtonModule, InputTextModule, MessageModule, ConfirmDialogModule],
  templateUrl: './adduser.html',
  styleUrl: './adduser.scss'
})
export class Adduser {

  @Output() onCancel = new EventEmitter<void>();

  @Output() onSaved = new EventEmitter<void>();

  user: User = {
    idUser: 0,
    nombre: '',
    tipo_doc: '',
    documento: '',
    correo: '',
    telefono: null,
    direccion: '',
    rol_user: '',
    usuario: '',
    password: ''
  }

  tipo_docs: { label: string, value: string }[] = [
    { label: 'DNI', value: 'DNI' },
    { label: 'Carnet de extranjeria', value: 'CE' },
    { label: 'Pasaporte', value: 'PAS' },
    { label: 'RUC', value: 'RUC' }
  ];

  rol_users: { label: string, value: string }[] = [
    { label: 'Normal', value: 'normal' },
    { label: 'Administrador', value: 'administrador' }
  ];

  constructor(
    private messageService: MessageService,
    private router: Router
  ) {}

  addUser() {
    console.log('Propiedad guardada:', this.user);

    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'El usuario se registró correctamente'
    });

    setTimeout(() => {
      this.onSaved.emit(); 
      this.router.navigate(['/users']);
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
      this.router.navigate(['/users']);
    }, 100);
  }


}
