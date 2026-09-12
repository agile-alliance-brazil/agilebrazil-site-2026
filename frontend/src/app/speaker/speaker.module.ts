import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpeakerComponent } from './speaker.component';

const routes: Routes = [
  { path: '', component: SpeakerComponent }
];

@NgModule({
  declarations: [SpeakerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SpeakerModule {}