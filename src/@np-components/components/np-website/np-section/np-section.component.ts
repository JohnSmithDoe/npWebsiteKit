import {Component, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {NPInViewDirective} from '../../../directives/np-in-view.directive';
import {CANIMATIONS, TAnimationFadeState} from '../../../utils/np-animations';

@Component({
             selector:   'np-section',
             template:   `
                             <ng-content></ng-content>
                         `,
             styles:     [`
               :host {
               }
             `],
             animations: [CANIMATIONS.fade.meta]
           })
export class NPSectionComponent extends NPInViewDirective implements OnInit {
  @Input() startState: TAnimationFadeState = 'fadeIn';
  @HostBinding('class.boxed') @Input() boxed = false;
  @HostBinding('class.fullsize') @Input() fullsize:boolean = false;
  @HostBinding('class.np-website-content') page;
  @HostBinding('@fadeState') fadeState;

  hasEnteredView = false;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

  @HostListener('enteredView') private onEnterView = () => {
    console.log('has entered view np section');
    this.hasEnteredView = true;
    this.fadeState = 'fadeIn';
  };

  ngOnInit() {
    this.page = !this.fullsize;
    this.fadeState = this.startState;
  }

}
