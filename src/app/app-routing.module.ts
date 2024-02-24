import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ObjectTableComponent} from "./object-table/object-table.component";
import {InfoTextImgComponent} from "./info-text-img/info-text-img.component";
import {InfoAboutComponent} from "./info-about/info-about.component";

const routes: Routes = [
  { path: 'object-table', component: ObjectTableComponent },
  { path: 'info-text-img', component: InfoTextImgComponent },
  { path: 'info-about/:id', component: InfoAboutComponent},
  { path: '', redirectTo: '/object-table', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
