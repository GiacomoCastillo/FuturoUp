import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'web/inicio', pathMatch: 'full' },
    { path: 'web', loadChildren: () => import('./modules/web/web.module').then(m => m.WebModule)},
];
