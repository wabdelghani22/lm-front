import { Injectable } from '@angular/core';

@Injectable()
export class AnimationService {
  duration: number;
  currentDate: number

  constructor() {
    this.duration = 2000;
  }

  // Animation de l'incrémentation des variables en suivant la courbe d'accélération 'easeOutCubic'
  animateVariable(self, start: number, end: number, variableToIncrement, startDate: number = undefined) {
    let step: number;

    if (startDate == undefined) {
      startDate = new Date().getTime();
    }

    const currentDate = new Date().getTime();

    // Voir https://easings.net/fr#easeOutCubic pour les détails de la fonction
    step = 1 - Math.pow(1 - ((currentDate - startDate) / this.duration), 3);

    if (currentDate < startDate + this.duration) {
      if (start <= end) {
        self[variableToIncrement] = Math.floor(start + step * (end - start));
      } else {
        self[variableToIncrement] = Math.floor(start - step * (start - end));
      }

      setTimeout(() => {
        this.animateVariable(self, start, end, variableToIncrement, startDate);
      }, step);
    } else {
      self[variableToIncrement] = end;
    }
  }
}
