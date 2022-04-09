import {DOCUMENT} from '@angular/common';
import {Component, HostBinding, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {INPHeaderOptions, INPMenuItem} from '../../../@types/np-website.types';

@Component({
             selector:    'np-header',
             templateUrl: './np-header.component.html',
             styleUrls:   ['./np-header.component.scss'],
           })
export class NPHeaderComponent implements OnInit, OnChanges {
  @HostBinding('class.collapsed') isCollapsed = false;
  @HostBinding('class.expanded') isExpanded = false;

  @Input() scrollTop = 0;
  @Input() options: INPHeaderOptions;

  headerCollapseAt: number;
  headerExpandAt: number;

  menu: { group: string; items: INPMenuItem[] }[] = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit() {
    const computedStyle = getComputedStyle(this.document.documentElement);
    this.headerCollapseAt = Number.parseInt(computedStyle.getPropertyValue('--np-header-collapse'), 10);
    this.headerExpandAt = Number.parseInt(computedStyle.getPropertyValue('--np-header-expand'), 10);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.scrollTop) {
      this.isCollapsed = (this.scrollTop >= this.headerCollapseAt) && (this.scrollTop < this.headerExpandAt);
      this.isExpanded = this.scrollTop >= this.headerExpandAt;
    }
    if (changes.options) {
      this.menu = Object.keys(this.options.menu.groups).map(group => ({group, items: this.options.menu.groups[group]}));
    }
  }

}
