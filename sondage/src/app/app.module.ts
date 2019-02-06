import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

/* App Root */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

/*feature Components */
import { PersonnalComponent } from './personnal/personnal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Shared Service */
import { FormDataService } from './data/form-data.service';
import { WorkflowService } from './workflow/workflow.service';

import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';

import { DataComponent } from './data/data.component';

import { WorkflowComponent } from './workflow/workflow.component';
import { EventlistenerComponent } from './eventlistener/eventlistener.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    HomeComponent,NavbarComponent,
    AddressComponent,
    DataComponent,
    PersonnalComponent,
    ResultComponent,
    WorkComponent,
    WorkflowComponent,
    EventlistenerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],

  providers: [
    { provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
