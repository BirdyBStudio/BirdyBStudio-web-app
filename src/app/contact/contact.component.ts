import { Component } from '@angular/core';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'


@Component({
  selector: 'app-contact',
  imports: [MatCard, MatCardTitle, MatCardContent, MatFormFieldModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
