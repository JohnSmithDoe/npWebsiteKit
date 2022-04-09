import {animate, state, style, transition, trigger} from '@angular/animations';

export type TAnimationFadeState = 'fadeOut' | 'fadeIn' | 'fadeMid' | 'fadeBottom' | 'fadeLeft' | 'fadeRight';
export type TAnimationZoomState = 'zoomIn' | 'zoomOut';
export type TAnimationCollapseState = 'expanded' | 'collapsed';

/**
 * Usage:
 * --------
 *
 * Template:
 *
 * <div [@collapseState]="value ? 'expanded' : 'collapsed'">
 *    <ng-content></ng-content>
 * </div>
 *
 * Component:
 *
 * @Component({
 *              animations:  [CAnimations.collapse.meta],
 *            })
 */
export const CANIMATIONS = {
  collapse: {
    state: '@collapseState',
    meta:  trigger('collapseState', [
      state('expanded', style({height: '*', overflow: 'hidden',})),
      state('expanded-slow', style({height: '*', overflow: 'hidden',})),
      state('collapsed', style({height: 0, overflow: 'hidden',})),
      state('collapsed-slow', style({height: 0, overflow: 'hidden',})),
      transition('expanded => collapsed', animate('200ms ease-out')),
      transition('collapsed => expanded', animate('200ms ease-out')),
      transition('expanded-slow => collapsed-slow', animate('750ms ease-out')),
      transition('collapsed-slow => expanded-slow', animate('750ms ease-out'))
    ])
  },
  fade:     {
    state: '@fadeState',
    meta:  trigger('fadeState', [
      state('fadeIn', style({
                              opacity: 1,
                            })),
      state('fadeOut', style({
                               opacity:   0,
                               transform: 'translateY(80px)'
                             })),
      state('fadeMid', style({
                               opacity:   0,
                               transform: 'translateY(100px)'
                             })),
      state('fadeBottom', style({
                                  opacity:   0,
                                  transform: 'translateY(100px)'
                                })),
      state('fadeTop', style({
                                  opacity:   0,
                                  transform: 'translateY(-100px)'
                                })),
      state('fadeLeft', style({
                                opacity:   0,
                                transform: 'translateX(-100px)'
                              })),
      state('fadeRight', style({
                                 opacity:   0,
                                 transform: 'translateX(100px)'
                               })),
      transition('fadeIn => fadeOut', animate('1000ms ease-in')),
      transition('fadeOut => fadeIn', animate('850ms 500ms ease-out')),
      transition('fadeMid => fadeIn', animate('600ms 750ms ease-out')),
      transition('fadeBottom => fadeIn', animate('750ms 250ms ease-out')),
      transition('fadeTop => fadeIn', animate('750ms 250ms ease-out')),
      transition('fadeLeft => fadeIn', animate('750ms 250ms ease-out')),
      transition('fadeRight => fadeIn', animate('750ms 250ms ease-out')),
    ])
  },
  zoom:     {
    state: '@zoomState',
    meta:  trigger('zoomState', [
      state('zoomOut', style({
                               transform: 'scale(0)'
                             })),
      state('zoomIn', style({
                              transform: 'scale(1)'
                            })),
      transition('zoomOut => zoomIn', animate('1000ms ease-in')),
      transition('zoomIn => zoomOut', animate('1000ms ease-out'))
    ])
  },
};
