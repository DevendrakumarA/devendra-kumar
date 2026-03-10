import { Routes } from '@angular/router';
import { Full } from './layouts/full/full';

export const routes: Routes = [
    {
        path: '',
        component: Full,
        children: [
            { path: '', redirectTo: '', pathMatch: 'full' },
            // {
            //     path: '',
            //     loadChildren: () =>
            //         import('').then(
            //             (m) => m.
            //         ),
            // }
        ]
    }
];
