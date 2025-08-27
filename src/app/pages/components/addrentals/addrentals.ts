import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { Select, SelectModule } from 'primeng/select';


interface Doc {
    name: string;
    code: string;
}

@Component({
  selector: 'app-addrentals',
  imports: [Select, SelectModule, InputTextModule, FormsModule, ButtonModule, MessageModule, DatePicker],
  templateUrl: './addrentals.html',
  styleUrl: './addrentals.scss',
  providers: [MessageService]
})
export class Addrentals {

  loading = [false];

  date: Date[] | undefined;

  constructor(
        private messageService: MessageService,
  
    ) {}


    tipo_doc: Doc[] = [
        { name: 'DNI', code: 'DNI' },
        { name: 'Carnet de extranjeria', code: 'CE' },
        { name: 'Pasaporte', code: 'PAS' },
        { name: 'Carné de permiso temporal', code: 'CPP' },
        { name: 'RUC', code: 'RUC' }
    ];

  selectedDoc: Doc | undefined;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => (this.loading[index] = false), 1000);
    }

    addRent() {

    }


}
