import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { FamilyTreeComponent } from 'src/family-treee/family-tree/family-tree.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, FamilyTreeComponent],
  imports: [BrowserModule, AppRoutingModule, NgxOrgChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
