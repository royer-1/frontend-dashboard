import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from './app/pages/notfound/notfound';
import { Dashboard } from '@/pages/dashboard/dashboard';
import { Propertys } from '@/pages/propertys/propertys';
import { Login } from '@/pages/auth/login/login';
import { Contracts } from '@/pages/contracts/contracts';
import { Rentals } from '@/pages/rentals/rentals';
import { Manageds } from '@/pages/manageds/manageds';
import { Users } from '@/pages/users/users';
import { AuthGuard } from '@/guards/auth.guard';


export const appRoutes: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login },

    {
        path: '', 
        component: AppLayout,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'propertys', component: Propertys },
            { path: 'rentals', component: Rentals },
            { path: 'contracts', component: Contracts },
            { path: 'manageds', component: Manageds },
            { path: 'users', component: Users }

            // { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }

];
