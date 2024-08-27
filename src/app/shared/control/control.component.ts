import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control'
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;
  // private control =
  //   contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('after render');
    });

    afterNextRender(() => {
      console.log('after next render');
    });
  }

  @Input({ required: true }) label!: string;
  private el = inject(ElementRef);

  ngAfterContentInit(): void {
    // console.log('aftercontentinit')
  }

  // @HostListener('click')
  onClick() {
    // console.log('Clicked!');
    // console.log(this.el);
    console.log(this.control);
  }
}
