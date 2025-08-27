import { Routes } from '@angular/router';
import { Inmuebles } from './inmuebles/inmuebles';

export default [
    { path: 'inmuebles', component: Inmuebles },
    { path: '**', redirectTo: '/notfound' }
] as Routes;