import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  }
  ,
  {
    path: 'patrocinio',
    loadChildren: () => import('./sponsorship/sponsorship.module').then(m => m.SponsorshipModule)
  },
  {
    path: 'comunidade',
    loadChildren: () => import('./community/community.module').then(m => m.CommunityModule)
  },
  {
    path: 'codigo-de-conduta',
    loadChildren: () => import('./code-of-conduct/code-of-conduct.module').then(m => m.CodeOfConductModule)
  },
  {
    path: 'politica-de-privacidade',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
  },
  {
    path: 'diversidade-e-inclusao',
    loadChildren: () => import('./inclusion/inclusion.module').then(m => m.InclusionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
