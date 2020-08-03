import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsComponent } from './components/comics/comics.component';
import { SeriesComponent } from './components/series/series.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [

  { path: '', component: AdminComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'series', component: SeriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
