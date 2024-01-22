import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { GeneralTableComponent } from './general-table/general-table.component';
import { ShortInfoComponent } from './short-info/short-info.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: 'general-table', component: GeneralTableComponent },
  { path: 'short-info', component: ShortInfoComponent },
  { path: '', redirectTo: '/general-table', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    GeneralTableComponent,
    ShortInfoComponent,
    NavigationComponent
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
