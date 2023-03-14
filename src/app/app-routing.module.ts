import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeaderComponent } from './components/header/header.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { TableComponent } from './works/tasklist/table/table.component';
import { HomeComponent } from './components/home/home.component';
import { ToggleComponent } from './components/toggle/toggle.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'userslist', component: UserslistComponent},
  {path:'cenzor', component: CenzorComponent},
  {path:'tasklist', component: TasklistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
