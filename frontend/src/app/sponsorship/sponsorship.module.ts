import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SponsorshipComponent } from './sponsorship.component';

const routes: Routes = [ { path: '', component: SponsorshipComponent } ];

@NgModule({
  declarations: [SponsorshipComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SponsorshipModule {}
