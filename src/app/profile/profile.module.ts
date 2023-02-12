import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProfileComponent } from './profile.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    PresentationComponent,
    WorkComponent,
    IntroductionComponent,
    ProfileComponent,
  ],
  imports: [CommonModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
