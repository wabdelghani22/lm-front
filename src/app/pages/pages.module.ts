import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule, NgbCollapseModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { ToastrModule } from 'ngx-toastr';

import { PagesRoutingModule } from './pages-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MasseComponent } from './masse/masse.component';
import { FlagComponent } from './flag/flag.component';
import { RubriquesComponent } from './rubriques/rubriques.component';
import { MontantsComponent } from './montants/montants.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BulletinComponent } from './bulletin/bulletin.component';
import { AdministrationComponent } from './administration/administration.component';
import { AccessComponent } from './administration/access/access.component';
import { ConfigurationComponent } from './administration/configuration/configuration.component';

@NgModule({
  declarations: [DashboardComponent, MasseComponent, RubriquesComponent, FlagComponent, MontantsComponent, BulletinComponent, AdministrationComponent, AccessComponent, ConfigurationComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    PagesRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgxSpinnerModule,
    DropzoneModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    ToastrModule.forRoot({
      maxOpened: 1,
      autoDismiss: true
    }),
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [DecimalPipe]
})
export class PagesModule { }
