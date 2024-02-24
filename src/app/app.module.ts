import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ObjectTableComponent } from './object-table/object-table.component';

const routes: Routes = [
  { path: 'object-table', component: ObjectTableComponent },
  { path: '', redirectTo: '/object-table', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ObjectTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
