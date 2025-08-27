import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'PRINCIPAL',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'CATEGORIAS',
                items: [
                    {
                        label: 'Inmuebles',
                        icon: 'pi pi-fw  pi-home',
                        items: [
                            {
                                label: 'Inmmueble',
                                icon: 'pi pi-fw pi-warehouse',
                                routerLink: ['/inmuebles/inmuebles']
                            },
                            {
                                label: 'Audiorios',
                                icon: 'pi pi-fw pi-building',
                                routerLink: ['']
                            },
                            {
                                label: 'otros',
                                icon: 'pi pi-fw pi-th-large',
                                routerLink: ['']    
                            }
                        ]
                    },
                     { label: 'Reservas', icon: 'pi pi-fw pi pi-calendar', routerLink: [''] },
                    { label: 'Alquileres', icon: 'pi pi-fw pi-check-square', routerLink: [''] },
                    { label: 'Contratos', icon: 'pi pi-fw pi-file-edit', routerLink: ['/contracts/contracts'] },
                    { label: 'Administrados', icon: 'pi pi-fw pi-users', routerLink: [''] },
                    { label: 'Usuarios', icon: 'pi pi-fw pi-user', routerLink: ['/customer/customer'] }
                    // { label: 'Pagos', icon: 'pi pi-fw pi-money-bill', routerLink: ['/uikit/table'] },
                    // { label: 'Reportes', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/table'] },
                    // { label: 'Clientes', icon: 'pi pi-fw pi-list', routerLink: ['/customer/customer'] },
                    // { label: '------', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    // { label: '------', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    // { label: '------', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    // { label: '------', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
        
                ]
            },
            {
                label: 'INFORMES',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Gestión Financiera',
                        icon: 'pi pi-fw pi-chart-bar',
                        items: [
                            {
                                label: 'Ingresos',
                                icon: 'pi pi-fw pi-chart-line',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Gastos',
                                icon: 'pi pi-fw pi-wallet',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Informes Financieros',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    // {
                    //     label: '-----',
                    //     icon: 'pi pi-fw pi-pencil',
                    //     routerLink: ['/pages/crud']
                    // },
                    // {
                    //     label: '-----',
                    //     icon: 'pi pi-fw pi-exclamation-circle',
                    //     routerLink: ['/pages/notfound']
                    // },
                    // {
                    //     label: '-----',
                    //     icon: 'pi pi-fw pi-circle-off',
                    //     routerLink: ['/pages/empty']
                    // }
                ]
            },

            {
                label: 'CONFIGURACIÓN',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    { label: 'Configuración', icon: 'pi pi-fw pi-cog', routerLink: ['/uikit/input'] },
                ]
            }
        ];
    }
}
