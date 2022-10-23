import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { RubriquesService } from './rubriques.service';
import { Table } from './rubriques.model';

@Component({
  selector: 'app-rubriques',
  templateUrl: './rubriques.component.html',
  styleUrls: ['./rubriques.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RubriquesComponent implements OnInit {

  constructor(public service: RubriquesService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  tableData = [];
  tableData2 = [];

  matriculeArray = [];

  manquantesArray = ['Réduction Générale de Cotisations Patronales', 'ALLEGEMENT DE COTISATIONS EMPLOYEUR', 'Indemnités de tenue', 'Salaire apprenti', 'Réduction Générale de Cotisations Patronales'];

  emploiArray = ['Employé', 'Agent de maîtrise', 'Apprenti', 'Cadre'];
  vue_mensuelle = false;

  ngOnInit() {
    for (let index = 0; index < 20; index++) {
      this.matriculeArray.push(Math.round(Math.random() * (50000 - 1127) + 1))
    }

    this.matriculeArray = this.matriculeArray.sort(function(a, b) {
      return a - b;
    });

    for (let index = 0; index < 9; index++) {
      let randomNb = Math.round(Math.random() * (3 - 0) + 0);
      let item = this.emploiArray[randomNb]

      this.tableData.push({
        matricule: this.matriculeArray[index],
        contrat: Math.round(Math.random() * (2 - 1) + 1),
        bulletin: Math.round(Math.random() * (5 - 1) + 1),
        categorie: item,
        verify: Math.round(Math.random() * (10 - 1) + 1),
      })
    }

    this.tableData = this.tableData.sort(function(a, b) {
      return a.matricule - b.matricule;
    });

    this.tableData[0].matricule = 1127;
    this.tableData[0].categorie = 'Cadre';

    for (let index = 0; index < 20; index++) {
      let randomNb = Math.round(Math.random() * (4 - 0) + 0);
      let itemMissing = this.manquantesArray[randomNb]

      randomNb = Math.round(Math.random() * (3 - 0) + 0);
      let itemEmploi = this.emploiArray[randomNb]

      if (itemMissing == 'Salaire apprenti') {
        itemEmploi = 'Apprenti'
      }

      this.tableData2.push({
        matricule: this.matriculeArray[index],
        contrat: Math.round(Math.random() * (2 - 1) + 1),
        bulletin: Math.round(Math.random() * (5 - 1) + 1),
        categorie: itemEmploi,
        missing: itemMissing
      })
    }

    this.service.setTableData(this.tableData2);
  }
}
