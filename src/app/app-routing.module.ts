import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path:         'home/:id',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path:         'dsgvo', pathMatch: 'full',
    loadChildren: () => import('./pages/dsgvo/dsgvo.module').then(m => m.DsgvoPageModule)
  },
  {
    path:         'agb',
    loadChildren: () => import('./pages/agb/agb.module').then(m => m.AgbPageModule)
  },
  {
    path:         'impressum',
    loadChildren: () => import('./pages/impressum/impressum.module').then(m => m.ImpressumPageModule)
  },
  {path: '', redirectTo: 'home/welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'home/welcome'},
];

@NgModule({
            imports: [
              RouterModule.forRoot(routes, {
                preloadingStrategy: PreloadAllModules,
                // anchorScrolling:    'enabled',
                enableTracing: true
              })
            ],
            exports: [RouterModule]
          })
export class AppRoutingModule {}
