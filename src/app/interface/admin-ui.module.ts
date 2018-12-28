import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'; Come from shared Module
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material-module';
import { Routes, RouterModule } from '@angular/router';

// Imports Components
import { AdminUiAppComponent } from './admin-ui-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  { path: '', component: AdminUiAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [AdminUiAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent],
  imports: [
  //  CommonModule, Come from shared Module
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminUIModule { }
