import { Component, ElementRef, viewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')

  onSubmit(title: string, ticketText: string) {
    console.log(title, ticketText)
    
    this.form().nativeElement.reset()
  }
}
