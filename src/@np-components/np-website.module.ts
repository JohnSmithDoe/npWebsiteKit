import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {NPWebsiteConfigService} from './services/np-website-config.service';
import {INPWebsiteConfig} from './@types/np-website.types';
import {NPCardItemComponent} from './components/np-website/np-card-row-panel/np-card-item/np-card-item.component';
import {NPCardRowPanelComponent} from './components/np-website/np-card-row-panel/np-card-row-panel.component';
import {NPFooterComponent} from './components/np-website/np-footer/np-footer.component';
import {NPHeaderComponent} from './components/np-website/np-header/np-header.component';
import {NPImageItemComponent} from './components/np-website/np-image-row-panel/np-image-item/np-image-item.component';
import {NPImageRowPanelComponent} from './components/np-website/np-image-row-panel/np-image-row-panel.component';
import {NPMenuComponent} from './components/np-website/np-menu/np-menu.component';
import {NPSectionComponent} from './components/np-website/np-section/np-section.component';
import {NpSplitPanelComponent} from './components/np-website/np-split-panel/np-split-panel.component';
import {NPTitlePanelComponent} from './components/np-website/np-title-panel/np-title-panel.component';
import {NPWebsitePageComponent} from './components/np-website/np-website-page/np-website-page.component';
import {NPWebsiteComponent} from './components/np-website/np-website/np-website.component';
import {NPInViewDirective} from './directives/np-in-view.directive';

const components = [
  NPInViewDirective,
  NPSectionComponent,
  NPTitlePanelComponent,
  NPImageItemComponent,
  NPImageRowPanelComponent,
  NpSplitPanelComponent,
  NPCardItemComponent,
  NPCardRowPanelComponent,
  NPHeaderComponent,
  NPFooterComponent,
  NPMenuComponent,
];

@NgModule({
            imports:      [
              CommonModule,
              FormsModule,
              IonicModule,
              TranslateModule.forChild(),
              RouterModule,
            ],
            declarations: [
              components,
              NPWebsiteComponent,
              NPWebsitePageComponent,
            ],
            exports:      [
              components,
              NPWebsiteComponent,
              NPWebsitePageComponent,
            ],
          })
export class NPWebsiteModule {

  static forRoot(config: INPWebsiteConfig): ModuleWithProviders<NPWebsiteModule> {
    // User config get logged here
    console.log('for root', config);
    return {
      ngModule:  NPWebsiteModule,
      providers: [NPWebsiteConfigService, {provide: 'config', useValue: config}]
    };
  }

}
