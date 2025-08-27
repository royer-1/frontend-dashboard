import { Component, inject  } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Select, SelectModule } from 'primeng/select';
import { Message } from 'primeng/message';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface City {
    name: string;
    code: string;
}

@Component({
  selector: 'app-formcustomer',
  imports: [FloatLabelModule, InputTextModule, FormsModule, ButtonModule, Select, SelectModule],
  templateUrl: './formcustomer.html',
  styleUrl: './formcustomer.scss'
})
export class Formcustomer {
  value3: string | undefined;

  saveProduct(){

  }

  hideDialog(){
    
  }

  messageService = inject(MessageService);

    cities: City[] = [
        { name: 'DNI', code: 'DNI' },
        { name: 'Carnet de extranjeria', code: 'CE' },
        { name: 'Pasaporte', code: 'PAS' },
        { name: 'Carné de permiso temporal', code: 'CPP' },
        { name: 'RUC', code: 'RUC' }
    ];

  selectedCity: City | undefined;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }

}
