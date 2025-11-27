import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { OrderListModule } from 'primeng/orderlist';
import { TagModule } from 'primeng/tag';
import { PickListModule } from 'primeng/picklist';

import { User ,UserService } from '../service/users.service';
import { DialogModule } from 'primeng/dialog';
import { Detailsuser } from '../components/detailsuser/detailsuser';
import { Adduser } from '../components/adduser/adduser';

@Component({
  selector: 'app-users',
  imports: [DataViewModule, FormsModule, SelectButtonModule, ButtonModule, CommonModule, OrderListModule, TagModule, PickListModule, OrderListModule, ButtonModule, DialogModule, Detailsuser, Adduser],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  providers: [UserService]
})
export class Users {

  user!: User[];

  layout: 'grid' | 'list' = 'grid';

  options = ['grid', 'list'];

  visibleDetails: boolean = false;

  visibleAddUser: boolean = false;

  selectedItem: any = null;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUserSmall().then((data) => (this.user = data.slice(0, 10)));

  }

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

  addUser() {
    this.visibleAddUser = true;
  }

  detailsUser(item:any) {
    this.selectedItem = item;
    this.visibleDetails = true;
  }

}
