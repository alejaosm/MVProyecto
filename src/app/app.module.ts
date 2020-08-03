import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ComicsComponent } from './components/comics/comics.component';
import {HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { SeriesComponent } from './components/series/series.component';
import { DialogSeriesComponent } from './components/dialog-series/dialog-series.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogComicsComponent } from './components/dialog-comics/dialog-comics.component';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdminComponent,
    ComicsComponent,
    AlertDialogComponent,
    SeriesComponent,
    DialogSeriesComponent,
    DialogComicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
