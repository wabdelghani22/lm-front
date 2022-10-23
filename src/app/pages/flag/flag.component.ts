import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { FlagService } from './flag.service';
import { Table } from './flag.model';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FlagComponent implements OnInit {

  constructor(public service: FlagService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  tableData = [];

  emploiArray = ['Employé', 'Agent de maîtrise', 'Apprenti', 'Cadre', 'Stagiaire']
  vue_mensuelle = true;

  tableData2 = [{ matricule: 1127, categorie: "Cadre", libelle: "Salaire forfaitaire", base: 0, t1: 0, m1: 4319.49, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Heures rachat forfait jours", base: 4.75, t1: 31.3275, m1: 148.81, t2: 10, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Heures de dimanche", base: 4.75, t1: 42.7193, m1: 202.92, t2: 50, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Absence Congés payés", base: 1, t1: 166.1342, m1: 166.13, t2: 0, m2: 166.13 },
  { matricule: 1127, categorie: "Cadre", libelle: "Absence Congés payés", base: 5, t1: 166.1342, m1: 830.67, t2: 0, m2: 830.67 },
  { matricule: 1127, categorie: "Cadre", libelle: "Indemnité congés payés référence", base: 1, t1: 168.2202, m1: 168.22, t2: 0, m2: 168.22 },
  { matricule: 1127, categorie: "Cadre", libelle: "Indemnité congés payés référence", base: 5, t1: 168.2202, m1: 841.1, t2: 0, m2: 841.1 },
  { matricule: 1127, categorie: "Cadre", libelle: "**** BRUT FISCAL ****", base: 0, t1: 0, m1: 4683.74, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Maladie régime général", base: 4683.74, t1: 0, m1: 0, t2: 7, m2: 327.86 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Maladie régime général Cpt", base: 4683.74, t1: 0, m1: 0, t2: 6, m2: 281.02 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Allocations familiales", base: 4683.74, t1: 0, m1: 0, t2: 3.45, m2: 161.59 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Vieillesse déplafonnée", base: 4683.74, t1: 0.4, m1: 18.73, t2: 1.9, m2: 88.99 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Vieillesse tranche A", base: 3428, t1: 6.9, m1: 236.53, t2: 8.55, m2: 293.09 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF FNAL déplafonné", base: 4683.74, t1: 0, m1: 0, t2: 0.5, m2: 23.42 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Versement mobilité", base: 4683.74, t1: 0, m1: 0, t2: 2, m2: 93.67 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Contribution solidarité", base: 4683.74, t1: 0, m1: 0, t2: 0.3, m2: 14.05 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Contribution au dialogue social", base: 4683.74, t1: 0, m1: 0, t2: 0.016, m2: 0.75 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF Accidents du travail", base: 4683.74, t1: 0, m1: 0, t2: 1.43, m2: 66.98 },
  { matricule: 1127, categorie: "Cadre", libelle: "Assurance Chômage", base: 4683.74, t1: 0, m1: 0, t2: 4.05, m2: 189.69 },
  { matricule: 1127, categorie: "Cadre", libelle: "Cotisation A.G.S.", base: 4683.74, t1: 0, m1: 0, t2: 0.15, m2: 7.03 },
  { matricule: 1127, categorie: "Cadre", libelle: "Retraite Agirc Arrco Tr. TU1", base: 3428, t1: 3.15, m1: 107.98, t2: 4.72, m2: 161.8 },
  { matricule: 1127, categorie: "Cadre", libelle: "Retraite Agirc Arrco Tr. TU2", base: 1255.74, t1: 8.64, m1: 108.5, t2: 12.95, m2: 162.62 },
  { matricule: 1127, categorie: "Cadre", libelle: "CEG Agirc Arrco Tr. TU1", base: 3428, t1: 0.86, m1: 29.48, t2: 1.29, m2: 44.22 },
  { matricule: 1127, categorie: "Cadre", libelle: "CEG Agirc Arrco Tr. TU2", base: 1255.74, t1: 1.08, m1: 13.56, t2: 1.62, m2: 20.34 },
  { matricule: 1127, categorie: "Cadre", libelle: "CET Agirc Arrco Tr.TU1", base: 3428, t1: 0.14, m1: 4.8, t2: 0.21, m2: 7.2 },
  { matricule: 1127, categorie: "Cadre", libelle: "CET Agirc Arrco Tr.TU2", base: 1255.74, t1: 0.14, m1: 1.76, t2: 0.21, m2: 2.64 },
  { matricule: 1127, categorie: "Cadre", libelle: "APEC Agirc Arrco Tr.1", base: 3428, t1: 0.024, m1: 0.82, t2: 0.036, m2: 1.23 },
  { matricule: 1127, categorie: "Cadre", libelle: "APEC Agirc Arrco Tr.2 limité à 4 PSS", base: 1255.74, t1: 0.024, m1: 0.3, t2: 0.036, m2: 0.45 },
  { matricule: 1127, categorie: "Cadre", libelle: "Prévoyance tr.A", base: 3428, t1: 0.22, m1: 7.54, t2: 1.95, m2: 66.85 },
  { matricule: 1127, categorie: "Cadre", libelle: "Prévoyance tr.B", base: 1255.74, t1: 0.99, m1: 12.43, t2: 1.21, m2: 15.19 },
  { matricule: 1127, categorie: "Cadre", libelle: "Prévoyance tr.C", base: 0, t1: 0.99, m1: 0, t2: 1.21, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Forfait Mutuelle Imposable", base: 0, t1: 0, m1: 7.38, t2: 0, m2: 30 },
  { matricule: 1127, categorie: "Cadre", libelle: "Taxe d'apprentissage", base: 4683.74, t1: 0, m1: 0, t2: 0.68, m2: 31.85 },
  { matricule: 1127, categorie: "Cadre", libelle: "Contribution supplémentaire d'apprentissage", base: 4683.74, t1: 0, m1: 0, t2: 0.05, m2: 2.34 },
  { matricule: 1127, categorie: "Cadre", libelle: "Effort construction ", base: 4683.74, t1: 0, m1: 0, t2: 0.45, m2: 21.08 },
  { matricule: 1127, categorie: "Cadre", libelle: "Cotisation C.S.E.", base: 4683.74, t1: 0, m1: 0, t2: 0.22, m2: 10.3 },
  { matricule: 1127, categorie: "Cadre", libelle: "Oeuvre Sociale C.S.E.", base: 4683.74, t1: 0, m1: 0, t2: 0.5, m2: 23.42 },
  { matricule: 1127, categorie: "Cadre", libelle: "Formation professionnelle", base: 4683.74, t1: 0, m1: 0, t2: 1, m2: 46.84 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF CSG déductible", base: 4713.81, t1: 6.8, m1: 320.54, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF forfait social", base: 112.04, t1: 0, m1: 0, t2: 8, m2: 8.96 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF forfait social taux 2", base: 6191.06, t1: 0, m1: 0, t2: 20, m2: 1238.21 },
  { matricule: 1127, categorie: "Cadre", libelle: "** TOTAL COTISATIONS **", base: 0, t1: 0, m1: 870.35, t2: 0, m2: 3443.68 },
  { matricule: 1127, categorie: "Cadre", libelle: "Part Patronale frais de santé", base: 0, t1: 0, m1: 30, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Net fiscal", base: 4683.74, t1: 870.35, m1: 7016.92, t2: 0, m2: 7016.92 },
  { matricule: 1127, categorie: "Cadre", libelle: "Forfait Mutuelle Non Imposable", base: 0, t1: 0, m1: 124.27, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Mutuelle - Surcomplémentaire", base: 0, t1: 0, m1: 1.8, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "URSSAF CSG/CRDS", base: 4713.81, t1: 2.9, m1: 136.7, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Indemnités de tenue", base: 6.42, t1: 1, m1: 6.42, t2: 1, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Titres restaurants", base: 15, t1: 3.2, m1: 48, t2: 4.8, m2: 72 },
  { matricule: 1127, categorie: "Cadre", libelle: "NET A PAYER AVANT IMPOT SUR LE REVENU", base: 0, t1: 0, m1: 3509.04, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Dont évolution de la rémunération liée à la suppression des cotisations chômage et maladie", base: 67.41, t1: 0, m1: 0, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Impôt sur le revenu prélevé à la source", base: 3843.39, t1: 10.6, m1: 407.4, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "Impôt sur l'actionnariat prélevé à la source []", base: 3173.53, t1: 10.6, m1: 336.39, t2: 0, m2: 305 },
  { matricule: 1127, categorie: "Cadre", libelle: "NET PAYE EN EUROS", base: 0, t1: 0, m1: 3101.64, t2: 0, m2: 0 },
  { matricule: 1127, categorie: "Cadre", libelle: "TOTAL DES COTISATIONS  ET CONTRIBUTIONS", base: 0, t1: 0, m1: 1133.12, t2: 0, m2: 3443.68 },
  { matricule: 1127, categorie: "Cadre", libelle: "TOTAL VERSE PAR L'EMPLOYEUR", base: 8127.42, t1: 0, m1: 0, t2: 0, m2: 0 }];

  ngOnInit() {
    for (let index = 0; index < 11; index++) {
      let randomNb = Math.round(Math.random() * (4 - 0) + 0);
      let item = this.emploiArray[randomNb]

      this.tableData.push({
        matricule: Math.round(Math.random() * (50000 - 1127) + 1),
        contrat: Math.round(Math.random() * (2 - 1) + 1),
        bulletin: Math.round(Math.random() * (5 - 1) + 1),
        categorie: item
      })
    }

    this.tableData = this.tableData.sort(function(a, b) {
      return a.matricule - b.matricule;
    });

    this.tableData[0].matricule = 1127;
    this.tableData[0].categorie = 'Cadre';

    this.service.setTableData(this.tableData2);
  }
}
