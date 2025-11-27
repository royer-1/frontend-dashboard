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
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }]
            },
            {
                label: 'CATEGORIAS',
                items: [
                    { label: 'Predios', icon: 'pi pi-fw  pi-home', routerLink: ['/propertys']},
                    // { label: 'Reservas', icon: 'pi pi-fw pi pi-calendar', routerLink: [''] },
                    { label: 'Alquileres', icon: 'pi pi-fw pi-check-square', routerLink: ['/rentals'] },
                    { label: 'Contratos', icon: 'pi pi-fw pi-file-edit', routerLink: ['/contracts'] },
                    { label: 'Administrados', icon: 'pi pi-fw pi-users', routerLink: ['/manageds'] },
                    { label: 'Usuarios', icon: 'pi pi-fw pi-user', routerLink: ['/users'] }
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
                                routerLink: ['']
                            },
                            {
                                label: 'Gastos',
                                icon: 'pi pi-fw pi-wallet',
                                routerLink: ['']
                            },
                            {
                                label: 'Informes Financieros',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['']
                            }
                        ]
                    },
                ]
            },

            {
                label: 'CONFIGURACIÓN',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    { label: 'Configuración', icon: 'pi pi-fw pi-cog', routerLink: [''] },
                ]
            }
        ];
    }
}
