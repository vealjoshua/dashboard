import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter()
  add = output<{ title: string; text: string }>();

  ngOnInit(): void {
    console.log('oninit');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('after view init');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, text: string) {
    this.add.emit({ title, text });
    this.form?.nativeElement.reset();
    // this.form().nativeElement.reset();
  }
}
