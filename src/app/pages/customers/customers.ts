// import { Component, OnInit, signal, ViewChild} from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { MessageService, ConfirmationService } from 'primeng/api';
// import { ToolbarModule } from 'primeng/toolbar';
// import { ButtonModule } from 'primeng/button';
// import { Table, TableModule } from 'primeng/table';
// import { IconFieldModule } from 'primeng/iconfield';
// import { InputIconModule } from 'primeng/inputicon';
// import { InputTextModule } from 'primeng/inputtext';

import { Component, OnInit, signal, ViewChild, ElementRef } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FloatLabel, FloatLabelModule } from 'primeng/floatlabel';

import { Customer, CustomerService } from '../service/customer.service';
import { Formcustomer } from '../components/formcustomer/formcustomer';


interface Column {
    field: string;
    header: string;
    customExportHeader?: string;
}

interface ExportColumn {
    title: string;
    dataKey: string;
}

@Component({
  selector: 'app-customers',
  imports: [FormsModule, CommonModule, ToolbarModule, ButtonModule, TableModule, IconFieldModule, InputIconModule, InputTextModule, ConfirmDialogModule, TagModule, DialogModule,ToastModule,RippleModule, InputNumberModule, Formcustomer, FloatLabelModule],
  templateUrl: './customers.html',
  styleUrl: './customers.scss',
  providers: [CustomerService, MessageService, ConfirmationService]
})
export class Customers implements OnInit{

  customerDialog: boolean = false;

  customers = signal<Customer[]>([]);

  // customers1: Customer[] = [];

  customer!: Customer[];

  // submitted: boolean = false;

  cols!: Column[];

  selectedCustomers!: Customer[] | null;

   visible: boolean = false;

  @ViewChild('dt') dt!: Table;
  @ViewChild('filter') filter!: ElementRef;

  constructor(
        private customerService: CustomerService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

  ngOnInit(): void {
    this.customerService.getCustomerLarge().then((customer) => {
      this.customer = customer
    })  
  }

  exportCSV() {
    this.dt.exportCSV();
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  addCustomer(){
    this.visible = true;
  }

  // ngOnInit() {
  //   this.loadCustomerData();
  // }

  // loadCustomerData(){
  //   this.customerService.getCustomer().then((data)) => {
  //     this.customers.set(data);
  //   }
  // }

  onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

  deleteSelectedCustomers() {
    this.confirmationService.confirm({
      message: 'Está seguro de que desea eliminar a los clientes seleccionados?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.customers.set(this.customers().filter((val) => !this.selectedCustomers?.includes(val)));
        this.selectedCustomers = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Customers Deleted',
          life: 3000
        })
      }
    })
  }

  deleteCustomer(customer:Customer) {
    this.confirmationService.confirm({
      message: 'Estás seguro de que quieres eliminar a ' + customer.nombres + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.customers.set(this.customers().filter((val) => val.id_cliente !== customer.id_cliente));
        this.customer;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000
        });
      }
    });
  }


// deleteCustomers1(event: Event) {
//         this.confirmationService.confirm({
//             target: event.target as EventTarget,
//             message: 'Are you sure that you want to proceed?',
//             header: 'Confirmation',
//             closable: true,
//             closeOnEscape: true,
//             icon: 'pi pi-exclamation-triangle',
//             rejectButtonProps: {
//                 label: 'Cancel',
//                 severity: 'secondary',
//                 outlined: true,
//             },
//             acceptButtonProps: {
//                 label: 'Save',
//             },
//             accept: () => {
//                 this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
//             },
//             reject: () => {
//                 this.messageService.add({
//                     severity: 'error',
//                     summary: 'Rejected',
//                     detail: 'You have rejected',
//                     life: 3000,
//                 });
//             },
//         });
//     }

    // confirm2(event: Event) {
    //     this.confirmationService.confirm({
    //         target: event.target as EventTarget,
    //         message: 'Do you want to delete this record?',
    //         header: 'Danger Zone',
    //         icon: 'pi pi-info-circle',
    //         rejectLabel: 'Cancel',
    //         rejectButtonProps: {
    //             label: 'Cancel',
    //             severity: 'secondary',
    //             outlined: true,
    //         },
    //         acceptButtonProps: {
    //             label: 'Delete',
    //             severity: 'danger',
    //         },

    //         accept: () => {
    //             this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
    //         },
    //         reject: () => {
    //             this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
    //         },
    //     });
    // }


}
