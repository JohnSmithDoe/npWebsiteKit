import {Directive, HostListener} from '@angular/core';

@Directive()
export class NPBasePanelDirective {

  hasEnteredView = false;

  constructor() { }

  @HostListener('enteredView') private onEnterView = () => {
    this.hasEnteredView = true;
  };

}
