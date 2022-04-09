import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CMENU} from '../../../../app/app.consts';
import {NPWebsiteConfigService} from '../../../services/np-website-config.service';
import {INPHeaderOptions} from '../../../@types/np-website.types';

@Component({
             selector: 'np-website',
             template: `
                         <ion-app>
                           <ion-menu menuId="main-menu" contentId="main-content" type="push">
                             <np-menu></np-menu>
                           </ion-menu>
                             <ion-router-outlet id="main-content"></ion-router-outlet>
                         </ion-app>
                       `,
             styles:   [`
               :host {
                 background-color: red;
               }
             `],
           })
export class NPWebsiteComponent implements OnInit, OnChanges {
  scrollTop = 0;
  headerOptions: INPHeaderOptions = {
    logoLabel: 'npWebsiteKit',
    logoUrl:   'assets/images/logo-toolbar.png',
    menu:      CMENU
  };

  constructor(private readonly myserv: NPWebsiteConfigService) {
    console.log('np -website-create with config', myserv.menuOptions);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

}
