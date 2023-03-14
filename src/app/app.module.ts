import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { TableComponent } from './works/tasklist/table/table.component';
import { HomeComponent } from './components/home/home.component';
import { ToggleComponent } from './components/toggle/toggle.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserslistComponent,
    TasklistComponent,
    CenzorComponent,
    TableComponent,
    HomeComponent,
    ToggleComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
