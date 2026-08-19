import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommunityTmpComponent } from './community-tmp.component';

const routes: Routes = [
  { path: '', component: CommunityTmpComponent }
];

@NgModule({
  declarations: [CommunityTmpComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CommunityTmpModule {}
