import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ObjectTableComponent} from "./object-table/object-table.component";


const routes: Routes = [
  { path: 'object-table', component: ObjectTableComponent },
  { path: '', redirectTo: '/object-table', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
