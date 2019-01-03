import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'; Come from shared Module
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material-module';
import { RouterModule } from '@angular/router';

// Imports Components
import { FWComponent } from './fw.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

// const routes: Routes = [
//   { path: '', component: FWComponent,
//     children: [
//       { path: ':id', component: MainContentComponent },
//       { path: '', component: MainContentComponent }
//     ] },
//   { path: '**', redirectTo: '' }
// ];

@NgModule({
  declarations: [FWComponent, ToolbarComponent, MainContentComponent, SidenavComponent],
  imports: [
    SharedModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    FWComponent
  ]
})
export class FWModule { }
