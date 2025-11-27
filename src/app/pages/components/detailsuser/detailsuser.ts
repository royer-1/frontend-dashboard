import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';

import { Edituser } from "../edituser/edituser";

@Component({
  selector: 'app-detailsuser',
  imports: [CommonModule, TagModule, ButtonModule, DataViewModule, DialogModule, Edituser],
  templateUrl: './detailsuser.html',
  styleUrl: './detailsuser.scss'
})
export class Detailsuser {

  visibleEdit: boolean = false;

  selectedUser: any = null;

  @Input() user: any;

  getSeverity(rol_user: string) {
    switch (rol_user) {
      case 'Empleado':
        return 'success';

      case 'Administrador':
        return 'info';

      case 'Cliente':
        return 'danger';

      default:
        return 'warn';
    }
  }

  editUser(user: any){
    this.selectedUser = user;
    this.visibleEdit = true;
  }

}
