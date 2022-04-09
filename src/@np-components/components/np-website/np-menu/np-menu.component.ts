import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NPWebsiteConfigService} from '../../../services/np-website-config.service';
import {INPMenuItem, INPMenuOptions} from '../../../@types/np-website.types';

@Component({
             selector:    'np-menu',
             templateUrl: './np-menu.component.html',
             styleUrls:   ['./np-menu.component.scss'],
           })
export class NPMenuComponent implements OnInit, OnChanges {

  menu: { group: string; items: INPMenuItem[] }[] = [];


  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  private options: INPMenuOptions;

  constructor(private readonly myServ: NPWebsiteConfigService) {
    console.log('create menu component', myServ.menuOptions);
    this.options = myServ.menuOptions;
    this.menu = Object.keys(this.options.groups).map(group => ({group, items: this.options.groups[group]}));
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.options) {
      console.log('changed menu todo like constructor');
      this.menu = Object.keys(this.options.groups).map(group => ({group, items: this.options.groups[group]}));
    }
  }
}
