import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormPageComponent} from './form-page/form-page.component';
import {SuccessComponent} from './success/success.component';

@Component({
  selector: 'app-newsletter-sing-up',
  standalone: true,
  imports: [
    FormPageComponent,
    SuccessComponent,
    RouterOutlet
  ],
  templateUrl: './newsletter-sing-up.component.html',
  styleUrl: './newsletter-sing-up.component.scss'
})
export class NewsletterSingUpComponent {

}
