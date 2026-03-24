import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('700ms ease-in', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('350ms ease-out', style({ opacity: 0 }))
  ])
]);

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({ position: 'absolute', width: '100%' })
    ], { optional: true }),

    // Estado inicial del componente que entra
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(100%) scale(0.8) rotate(-10deg)'
      })
    ], { optional: true }),

    group([
      // Componente que sale
      query(':leave', [
        animate('800ms ease-in-out', style({
          opacity: 0,
          transform: 'translateX(-100%) scale(0.8) rotate(10deg)'
        }))
      ], { optional: true }),

      // Componente que entra
      query(':enter', [
        animate('800ms ease-in-out', style({
          opacity: 1,
          transform: 'translateX(0) scale(1) rotate(0)'
        }))
      ], { optional: true })
    ])
  ])
]);

export const zoomAnimation = trigger('zoomAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({ position: 'absolute', width: '100%' })
    ], { optional: true }),
    group([
      query(':leave', [animate('200ms ease-out', style({ transform: 'scale(0.95)', opacity: 0 }))], { optional: true }),
      query(':enter', [style({ transform: 'scale(1.05)', opacity: 0 }), animate('200ms ease-in', style({ transform: 'scale(1)', opacity: 1 }))], { optional: true })
    ])
  ])
]);
