import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { EventService } from '../../core/services/event.service';

import { SIDEBAR_TYPE } from "../layouts.model";

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss']
})

/**
 * Vertical component
 */
export class VerticalComponent implements OnInit {

  isCondensed = false;
  sidebartype: string;

  constructor(private router: Router, private eventService: EventService) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        document.body.classList.remove('sidebar-enable');
      }
    });
  }

  ngOnInit() {
    this.sidebartype = SIDEBAR_TYPE;

    document.body.setAttribute('data-layout', 'vertical');

    let collapsed: string = localStorage.getItem('sideBarCollapsed')

    if (!collapsed) {
      collapsed = 'false'
      localStorage.setItem('sideBarCollapsed', collapsed)
    }

    if (collapsed == 'true') {
      this.onToggleMobileMenu()
    }

    let mode: string = localStorage.getItem('mode')

    if (!mode || !['dark', 'light'].includes(mode)) {
      mode = 'dark'
      localStorage.setItem('mode', mode)
    }

    document.body.setAttribute('data-sidebar', mode);
    document.body.setAttribute('data-theme', mode);
  }

  isMobile() {
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
  }

  /**
   * On mobile toggle button clicked
   */
  onToggleMobileMenu() {
    this.isCondensed = !this.isCondensed;
    localStorage.setItem('sideBarCollapsed', this.isCondensed.toString())

    document.body.classList.toggle('sidebar-enable');
    document.body.classList.toggle('vertical-collpsed');

    if (window.screen.width <= 768) {
      document.body.classList.remove('vertical-collpsed');
    }
  }


}
