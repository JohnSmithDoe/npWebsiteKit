import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {NPWebsiteComponent} from '../@np-components/components/np-website/np-website/np-website.component';
import {NPWebsiteModule} from '../@np-components/np-website.module';
import {AppRoutingModule} from './app-routing.module';

import {CMENU} from './app.consts';

@NgModule({
            imports:   [
              BrowserModule,
              BrowserAnimationsModule,
              IonicModule.forRoot({
                                    mode: 'md'
                                  }
              ),
              NPWebsiteModule.forRoot({menu: CMENU, title: 'np-website-page'}),
              AppRoutingModule,
            ],
            providers: [
              {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
            ],
            bootstrap: [NPWebsiteComponent],
          })
export class AppModule {}
