import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './components/home/home.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { ConveniosComponent } from './components/convenios/convenios.component';
import { ServiciosComponent } from './components/servicios/servicios.component';


@NgModule({
  declarations: [
    ConocenosComponent,
    ConveniosComponent,
    ServiciosComponent,
    HomeComponent,
    TopbarComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    ReactiveFormsModule,
    CdkAccordionModule,
    HttpClientModule,
    FormsModule,    
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    MatStepperModule,
  ]
})
export class WebModule { }
