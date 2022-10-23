import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class SpinnerService {

  constructor(private spinner: NgxSpinnerService, ) { }

  hideSpinners(spinnerArray: Array<string>) {
    for (const spinnerName of spinnerArray) {
      this.spinner.hide(spinnerName);
    }
  }

  showSpinners(spinnerArray: Array<string>) {
    for (const spinnerName of spinnerArray) {
      this.spinner.show(spinnerName);
    }
  }

  showSpinnersByTheme(spinners, theme = undefined) {
    if (theme == undefined) {
      theme = document.body.getAttribute('data-theme');
    }

    if (theme == 'dark') {
      this.hideSpinners(spinners.light);
      this.showSpinners(spinners.dark);
    } else {
      this.hideSpinners(spinners.dark);
      this.showSpinners(spinners.light);
    }
  }

  hideSpinnersByTheme(spinners, theme = undefined) {
    if (theme == undefined) {
      theme = document.body.getAttribute('data-theme');
    }

    if (theme == 'dark') {
      this.hideSpinners(spinners.dark);
    } else {
      this.hideSpinners(spinners.light);
    }
  }
}
