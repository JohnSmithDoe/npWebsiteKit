import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CMENU} from '../../../../app/app.consts';
import {INPFooterOptions, INPHeaderOptions} from '../../../@types/np-website.types';
import {NPWebsiteConfigService} from '../../../services/np-website-config.service';

@Component({
             selector: 'np-website-page',
             template: `
                         <ion-content (ionScroll)="onScroll($event)" [scrollEvents]="true">
                           <np-header [scrollTop]="scrollTop" [options]="headerOptions"></np-header>
                           <div class="np-website-layout">
                             <div class="np-website-content">
                               <ng-content></ng-content>
                             </div>
                             <np-footer [options]="footerOptions"></np-footer>
                           </div>
                         </ion-content>
                       `,
             styles:   [`
               :host {
                 flex: 1;
               }

               :host .test {
                 background-color: red;
               }
             `],
           })
export class NPWebsitePageComponent implements OnInit, OnChanges {
  scrollTop = 0;
  // np-Website
  headerOptions: INPHeaderOptions = {
    logoLabel: 'npWebsiteKit',
    logoUrl:   'assets/images/logo-toolbar.png',
    menu:      CMENU
  };
  footerOptions: INPFooterOptions = {
    links:   [
      {label: 'Datenschutzerklärung', href: '/dsgvo'},
      {label: 'Nutzungsbedingungen', href: '/agb'},
      {label: 'Impressum', href: '/impressum'},
    ],
    company: 'np-Afterworks',
    address: 'Leto the cOdemOnkey'
  };

  constructor(private readonly myserv: NPWebsiteConfigService) {
    console.log('np -website-create with config', myserv.menuOptions);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  onScroll($event: any) {
    this.scrollTop = $event.detail.scrollTop;
  }
}
