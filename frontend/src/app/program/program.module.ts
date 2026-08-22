import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProgramComponent } from './program.component';

const routes: Routes = [
  { path: '', component: ProgramComponent }
];

@NgModule({
  declarations: [ProgramComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ProgramModule {}
