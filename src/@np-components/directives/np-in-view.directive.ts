import {AfterViewInit, Directive, ElementRef, EventEmitter, Output} from '@angular/core';

@Directive({selector: '[npInView]'})
export class NPInViewDirective implements AfterViewInit {
  @Output() public enteredView = new EventEmitter<void>();

  constructor(
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    const elToObserve = this.elementRef.nativeElement;
    const observer = new IntersectionObserver(entries => {
      const isIntersecting = entries.reduce((prev, cur) => prev || cur.isIntersecting, false);
      if (isIntersecting) {
        this.enteredView.emit();
        observer.disconnect();
      }
    }, {threshold: [0, .1, .9, 1]});
    observer.observe(elToObserve);
  }

}
