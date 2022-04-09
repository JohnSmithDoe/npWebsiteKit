import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {NPWebsiteModule} from '../../../@np-components/np-website.module';

import { HomePageRoutingModule } from './home-page-routing.module';

import { HomePage } from './home-page.component';

@NgModule({
            imports: [
              CommonModule,
              FormsModule,
              IonicModule,
              HomePageRoutingModule,
              NPWebsiteModule
            ],
  declarations: [HomePage]
})
export class HomePageModule {}
