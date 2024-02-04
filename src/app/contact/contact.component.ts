import { Component } from '@angular/core';
import { reviews } from '../constants/constants'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
 revs = reviews;
}
