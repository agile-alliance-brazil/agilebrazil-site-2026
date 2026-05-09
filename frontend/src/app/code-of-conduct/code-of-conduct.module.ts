import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CodeOfConductComponent } from './code-of-conduct.component';

const routes: Routes = [ { path: '', component: CodeOfConductComponent } ];

@NgModule({
  declarations: [CodeOfConductComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CodeOfConductModule {}
