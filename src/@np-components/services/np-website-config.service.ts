import {Inject, Injectable} from '@angular/core';
import {INPMenuOptions, INPWebsiteConfig} from '../@types/np-website.types';

@Injectable({
              providedIn: 'root'
            })
export class NPWebsiteConfigService {
  public menuOptions: INPMenuOptions;

  constructor(@Inject('config') private config: INPWebsiteConfig) {
    this.menuOptions = config.menu;
  }

  initMenu(options: INPMenuOptions) {
    //  this.menuOptions = options;
  }
}
