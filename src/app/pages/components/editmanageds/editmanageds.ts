import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { Select, SelectModule } from 'primeng/select';

@Component({
  selector: 'app-editmanageds',
  imports: [CommonModule, SelectModule, InputTextModule, FormsModule, ButtonModule, MessageModule],
  templateUrl: './editmanageds.html',
  styleUrl: './editmanageds.scss',
  providers: [MessageService]
})
export class Editmanageds {

   @Input() managed: any;

   editManaged() {
    
   }
}
