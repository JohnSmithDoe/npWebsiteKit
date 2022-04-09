import {Component, Input, OnInit} from '@angular/core';
import {INPTitleOptions} from '../../../@types/np-website.types';
import {CANIMATIONS} from '../../../utils/np-animations';
import {preventEvent} from '../../../utils/np-utils';
import {NPBasePanelDirective} from '../np-base-panel/np-base-panel.directive';

@Component({
             selector:    'np-title-panel',
             templateUrl: './np-title-panel.component.html',
             styleUrls:   ['./np-title-panel.component.scss'],
             animations:  [CANIMATIONS.fade.meta],
           })
export class NPTitlePanelComponent extends NPBasePanelDirective implements OnInit {
  @Input() options: INPTitleOptions;

  ngOnInit() {}

  linkClicked($event: MouseEvent) {
    if (this.options?.scrollTarget) {
      preventEvent($event);
      const element = typeof this.options.scrollTarget === 'function'
        ? this.options.scrollTarget().nativeElement
        : this.options.scrollTarget.nativeElement;
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
}
