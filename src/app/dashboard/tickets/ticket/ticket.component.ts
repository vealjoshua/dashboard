import { Component, Input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input({ required: true }) data!: Ticket;
  detailsVisible = signal(false);
  close = output();

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((vis) => !vis);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
