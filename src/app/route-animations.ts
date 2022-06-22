//Animations
import {
  trigger,
  style,
  animate,
  transition,
  query,
  group,
  keyframes,
  stagger,
  sequence
} from '@angular/animations';


const SpinAnimation = [
    animate(
            '2000ms cubic-bezier(.42,-0.54,.27,3)',
            style({ transform: 'rotate(-360deg)'}),
        )
]

export const TextFadeInOut =[
    trigger('textFadeInOut',[
        transition(':enter', [
            style({opacity: 0}),
            animate('500ms', style({opacity: 1}))
        ]),
        transition(':leave', [
            style({opacity: 1}),
            animate('50ms', style({opacity: 0}))
        ])
    ])
]

export const FadeSlideInOut =[
    trigger('fadeSlideInOut', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateY(10px)' }),
            animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
        ]),
        transition(':leave', [
            animate('500ms', style({ opacity: 0, transform: 'translateY(-10px)' })),
        ]),
    ]),
]

export const FadeInGrow = [
    trigger('fadeInGrow', [
        transition(':enter', [
            query('.box-container', [
                style({opacity: 0}),
                stagger('50ms', [
                    animate('500ms', style({opacity: 1}))
                ])
            ])
        ])
    ])
]

export const LogoIntro = [
    trigger('logoIntro', [
        transition(':enter', [
            
            sequence([
                animate('1ms 1ms', style({transform: 'translateY(100px)'})),
                // query('.fanpad-logo', FadeSlideInOut),
                group([
                    // animate('1ms 1ms', style({transform: 'translateY(0px)'})),
                    animate('2000ms cubic-bezier(.42,-0.54,.27,3)', style({transform: 'scale(1.3) translateY(75px)'},)),
                    query('.fanpad-logo img', SpinAnimation),
                ]),
                animate('1000ms cubic-bezier(.8,-0.28,.32,.58)', style({transform: 'translateY(500px)', opacity: 0}))
            ])
            
            
        ])
    ])
]