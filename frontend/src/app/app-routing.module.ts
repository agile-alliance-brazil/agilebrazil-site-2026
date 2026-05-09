import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '2026',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '2026/sobre',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  }
  ,
  {
    path: '2026/patrocinio',
    loadChildren: () => import('./sponsorship/sponsorship.module').then(m => m.SponsorshipModule)
  },
  {
    path: '2026/codigo-de-conduta',
    loadChildren: () => import('./code-of-conduct/code-of-conduct.module').then(m => m.CodeOfConductModule)
  },
  {
    path: '2026/diversidade-e-inclusao',
    loadChildren: () => import('./inclusion/inclusion.module').then(m => m.InclusionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
