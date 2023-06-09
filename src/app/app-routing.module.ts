import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MaintenanceComponent } from './shared/components/maintenance/maintenance.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
        { path: 'cliente', loadChildren: () => import('./modules/cliente/cliente.module').then(m => m.ClienteModule) }
    ]
  },

  // Not lazy-loaded routes
  { path: 'maintenance', component: MaintenanceComponent },

  // Not found
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
