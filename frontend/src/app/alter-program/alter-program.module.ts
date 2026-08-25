import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlterProgramComponent } from './alter-program.component';

const routes: Routes = [
  { path: '', component: AlterProgramComponent }
];

@NgModule({
  declarations: [AlterProgramComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AlterProgramModule {}
