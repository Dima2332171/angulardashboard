import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ObjectTableComponent } from './object-table/object-table.component';
import {MatTableModule} from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {NgChartsModule} from "ng2-charts";
import { InfoTextImgComponent } from './info-text-img/info-text-img.component';
import { InfoAboutComponent } from './info-about/info-about.component';
import { ObjectListPopupComponent } from './object-list-popup/object-list-popup.component';

const routes: Routes = [
  { path: 'object-table', component: ObjectTableComponent },
  { path: 'info-text-img', component: InfoTextImgComponent },
  { path: 'info-about/:id', component: InfoAboutComponent},//something create with id
  { path: '', redirectTo: '/object-table', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ObjectTableComponent,
    InfoTextImgComponent,
    InfoAboutComponent,
    ObjectListPopupComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
