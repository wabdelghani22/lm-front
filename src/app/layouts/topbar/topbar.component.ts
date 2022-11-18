import { Component, OnInit, Output, EventEmitter, Inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { EventService } from '../../core/services/event.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class TopbarComponent implements OnInit {

  element;
  configData;

  nightModeToggle: boolean;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private eventService: EventService,
    public router: Router
  ) { }

  openMobileMenu: boolean;

  @Output() mobileMenuButtonClicked = new EventEmitter();

  ngOnInit() {
    this.openMobileMenu = false;
    this.element = document.documentElement;

    this.configData = {
      suppressScrollX: true,
      wheelSpeed: 0.3
    };

    const mode = localStorage.getItem('mode')
    this.nightModeToggle = mode == 'dark' ? false : true
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  onNightModeToggle() {
    this.nightModeToggle = !this.nightModeToggle

    let mode: string

    if (this.nightModeToggle) {
      mode = 'light'
    } else {
      mode = 'dark'
    }

    document.body.setAttribute('data-theme', mode);
    this.eventService.broadcast('data-theme', mode);
    localStorage.setItem('mode', mode)
  }
}
