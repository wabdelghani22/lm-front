import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationService } from './services/animation.service';
import { ApiService } from './services/api.service';
import { DownloadService } from './services/download.service';
import { EventService } from './services/event.service';
import { ReadService } from './services/read.service';
import { SpinnerService } from './services/spinner.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AnimationService,
    ApiService,
    EventService,
    DownloadService,
    ReadService,
    SpinnerService
  ]
})
export class CoreModule { }
