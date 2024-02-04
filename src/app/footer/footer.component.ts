import { Component } from '@angular/core';
import { socialMedia, footerLinks } from '../constants/constants'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
 socials = socialMedia
 ftrLinks = footerLinks;
}
