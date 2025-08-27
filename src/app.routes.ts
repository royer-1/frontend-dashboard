import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from './app/pages/notfound/notfound';
import { Dashboard } from '@/pages/dashboard/dashboard';
import { Customers } from '@/pages/customers/customers';
import { Propertys } from '@/pages/propertys/propertys';
import { Login } from '@/pages/auth/login/login';
import { Contracts } from '@/pages/contracts/contracts';
import { Rentals } from '@/pages/rentals/rentals';
import { Manageds } from '@/pages/manageds/manageds';


export const appRoutes: Routes = [
    {
        // path : 'inmubles',component Inmuebles,
        // path: 'inmuebles', component: Inmuebles,
        path: '', 
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'propertys', component: Propertys },
            { path: 'rentals', component: Rentals },
            { path: 'contracts', component: Contracts },
            { path: 'manageds', component: Manageds },
            { path: 'customers', component: Customers }

            // { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: 'login', component: Login },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
    // { path: '**', redirectTo: '/imuebles' }

];
